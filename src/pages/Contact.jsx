function Contact() {
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
            <br />
            Based in London, UK
          </div>
        </div>

        <div className="form-div">
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/xpzgrdkz"
            method="post"
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
            <input className="main-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
