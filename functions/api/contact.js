function jsonResponse(body, init = {}) {
  const headers = new Headers(init.headers);
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(JSON.stringify(body), { ...init, headers });
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readBody(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const data = await request.json().catch(() => ({}));
    return {
      name: data?.name,
      email: data?.email,
      message: data?.message,
      company: data?.company, // honeypot
    };
  }

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const form = await request.formData();
    return {
      name: form.get('name'),
      email: form.get('_replyto') ?? form.get('email'),
      message: form.get('message'),
      company: form.get('company'),
    };
  }

  return {};
}

export async function onRequestPost({ request, env }) {
  if (!env?.RESEND_API_KEY) {
    return jsonResponse(
      { ok: false, error: 'Server not configured (missing RESEND_API_KEY).' },
      { status: 500 },
    );
  }

  const { name, email, message, company } = await readBody(request);

  // Simple bot trap: if the hidden field is filled, pretend success.
  if (company) {
    return jsonResponse({ ok: true });
  }

  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  const cleanMessage = typeof message === 'string' ? message.trim() : '';

  if (!cleanName || cleanName.length > 120) {
    return jsonResponse({ ok: false, error: 'Please provide your name.' }, { status: 400 });
  }
  if (!isValidEmail(cleanEmail)) {
    return jsonResponse({ ok: false, error: 'Please provide a valid email.' }, { status: 400 });
  }
  if (!cleanMessage || cleanMessage.length > 2000) {
    return jsonResponse({ ok: false, error: 'Please provide a message.' }, { status: 400 });
  }

  const toEmail = env.CONTACT_TO_EMAIL || 'simeon.trv@gmail.com';
  const from = 'Portfolio contact form <contact@simeontu.com>';

  const subject = `Portfolio contact form: ${cleanName}`;
  const text = `New message from your portfolio contact form:

Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMessage}
`;

  const resendResp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [toEmail],
      reply_to: cleanEmail,
      subject,
      text,
    }),
  });

  if (!resendResp.ok) {
    const detail = await resendResp.text().catch(() => '');
    return jsonResponse(
      { ok: false, error: 'Failed to send message.', detail: detail || undefined },
      { status: 502 },
    );
  }

  return jsonResponse({ ok: true }, { status: 200 });
}

