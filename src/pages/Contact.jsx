import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get('name'),
      email: fd.get('_replyto'),
      message: fd.get('message'),
      company: fd.get('company'), // honeypot
    };

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || !data?.ok) {
        throw new Error(data?.error || 'Something went wrong sending your message.');
      }

      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong sending your message.');
    }
  }

  return (
    <>
      <h1 className="h1-contact">Contact</h1>

      <div className="contact-info-wrapper">
        <div className="contact-info-div">
          <div style={{ textTransform: 'none' }}>
            Simeon Tudzharov
            <br />
            Tel: <a href="tel:+447706099713">+44 7706099713</a>
            <br />
            Email: <a href="mailto:simeon.trv@gmail.com"> simeon.trv@gmail.com</a>
          </div>
        </div>

        <div className="form-div">
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            onSubmit={handleSubmit}
          >
            <label htmlFor="full-name">Name</label>
            <input type="text" name="name" id="full-name" placeholder="Your name here" required />

            <label htmlFor="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="your@email.here" required />

            <label htmlFor="message">Message</label>
            <textarea
              maxLength="240"
              rows="5"
              name="message"
              id="message"
              placeholder="Your message here"
              required
            />

            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
            {/* Honeypot field (hidden). If filled, we treat as bot. */}
            <input type="text" name="company" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

            <input
              className="main-button"
              type="submit"
              value={status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Submit'}
              disabled={status === 'sending'}
            />

            {status === 'error' && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
            {status === 'sent' && (
              <p style={{ color: 'green', marginTop: '0.5rem' }}>Thanks! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
