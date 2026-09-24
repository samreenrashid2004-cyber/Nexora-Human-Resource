import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('NEXORA Contact Form:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h1>Let's connect human potential<span> to what's next.</span></h1>
          <p>Tell us what you're working on. Whether you need talent, people strategy, or organizational support, we're ready to explore the right path with you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">START A CONVERSATION</span>
            <h2>People challenges<span> deserve better solutions.</span></h2>
            <p>Share a little about your organization and what you need. Our team can help identify the right next step.</p>
            <div className="contact-details">
              <div><small>EMAIL</small><strong>hello@nexora.co</strong></div>
              <div><small>LOCATION</small><strong>Lahore, Pakistan</strong></div>
              <div><small>AVAILABILITY</small><strong>Monday - Friday</strong></div>
            </div>
            <div className="contact-orbit">
              <div className="contact-ring contact-ring-one" />
              <div className="contact-ring contact-ring-two" />
              <div className="contact-ring contact-ring-three" />
              <div className="contact-core"><span>PEOPLE</span><strong>+</strong><span>POTENTIAL</span></div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <span className="section-eyebrow">MESSAGE RECEIVED</span>
                <h2>Thanks for<span> reaching out.</span></h2>
                <p>Your message has been submitted successfully. This concept form does not send real email yet.</p>
                <button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message <span>→</span></button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="name">Full Name</label><input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleChange} required autoComplete="name" /></div>
                  <div className="form-group"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required autoComplete="email" /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="company">Company</label><input id="company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange} required autoComplete="organization" /></div>
                  <div className="form-group"><label htmlFor="service">How Can We Help?</label><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="">Select a service</option><option>Talent Acquisition</option><option>Executive Search</option><option>HR Consulting</option><option>Employee Development</option><option>HR Operations</option><option>Workplace Strategy</option></select></div>
                </div>
                <div className="form-group"><label htmlFor="message">Tell Us More</label><textarea id="message" name="message" rows="7" placeholder="Tell us about your people challenge..." value={formData.message} onChange={handleChange} required aria-describedby="form-note" /></div>
                <button type="submit" className="btn btn-primary form-submit">Send Message <span>→</span></button>
                <small id="form-note" className="form-note">Concept website - form submission is demonstrated locally and does not send real email.</small>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
