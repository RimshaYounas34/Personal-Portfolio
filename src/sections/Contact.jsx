
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

import { personal } from '../data.js'
import SocialIcons from '../components/SocialIcons.jsx'

// EmailJS Configuration
const SERVICE_ID = 'service_waqucor'
const TEMPLATE_ID = 'template_e8fpjin'
const PUBLIC_KEY = 'XIHMB6w4YYCftjAlo'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  // Input change handler
  function handleChange(event) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setStatus({ type: '', message: '' })
  }

  // Form validation
  function validate() {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please enter a subject.'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    return newErrors
  }

  // Send email through EmailJS
  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please correct the errors in the form.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      const templateParams = {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! Thank you for contacting me.',
      })

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)

      setStatus({
        type: 'error',
        message: 'Sorry! Your message could not be sent. Please try again or contact me through WhatsApp.',
      })
    } finally {
      setIsSending(false)
    }
  }

  // WhatsApp alternative
  const whatsappText =
    `Hello Rimsha, I am ${form.name}.\n` +
    `I am interested in: ${form.subject}\n` +
    `My email: ${form.email}\n\n` +
    `${form.message}`

  const whatsappLink =
    `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(whatsappText)}`

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">

        {/* Contact Information */}
        <div className="contact-info">
          <p className="pill-label">
            <i></i> Get in touch
          </p>

          <h2>Contact Me</h2>

          <p className="contact-sub">
            Have a project or an opportunity in mind? Let's talk.
          </p>

          <a href={`mailto:${personal.email}`} className="card contact-item">
            <span className="icon-box">
              <Mail size={20} />
            </span>
            <span>
              <small className="mono-label">Direct Email</small>
              {personal.email}
            </span>
          </a>

          <a href={`tel:${personal.phoneLink}`} className="card contact-item">
            <span className="icon-box">
              <Phone size={20} />
            </span>
            <span>
              <small className="mono-label">Phone</small>
              {personal.phone}
            </span>
          </a>

          <a
            href={`https://wa.me/${personal.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card contact-item"
          >
            <span className="icon-box">
              <MessageCircle size={20} />
            </span>
            <span>
              <small className="mono-label">WhatsApp</small>
              Chat with me
            </span>
          </a>

          <div className="card contact-item">
            <span className="icon-box">
              <MapPin size={20} />
            </span>
            <span>
              <small className="mono-label">Location</small>
              {personal.location}
            </span>
          </div>

          <SocialIcons />
        </div>

        {/* Contact Form */}
        <form
          className="card contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h3>
            Hey! Let's build something{' '}
            <span className="gradient-text">
              together<span className="cursor">_</span>
            </span>
          </h3>

          <div className="madlib">

            <label htmlFor="name">My name is</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              disabled={isSending}
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}

            <label htmlFor="subject">
              And I'm interested in
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="e.g. a business website"
              value={form.subject}
              onChange={handleChange}
              disabled={isSending}
            />

            {errors.subject && (
              <p className="error">{errors.subject}</p>
            )}

            <label htmlFor="email">
              Please contact me at
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={handleChange}
              disabled={isSending}
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}

            <label htmlFor="message">Some details</label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me a little about your idea..."
              value={form.message}
              onChange={handleChange}
              disabled={isSending}
            />

            {errors.message && (
              <p className="error">{errors.message}</p>
            )}

          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={isSending}
          >
            {isSending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          {/* Success and Error Messages */}
          {status.message && (
            <div className="notice" role="status">
              <p>
                {status.type === 'success' ? (
                  <CheckCircle2
                    size={18}
                    style={{
                      display: 'inline',
                      verticalAlign: 'middle',
                      marginRight: '8px',
                    }}
                  />
                ) : (
                  <AlertCircle
                    size={18}
                    style={{
                      display: 'inline',
                      verticalAlign: 'middle',
                      marginRight: '8px',
                    }}
                  />
                )}

                {status.message}
              </p>
            </div>
          )}

          <p className="contact-sub">
            Prefer WhatsApp?{' '}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a WhatsApp message
            </a>
          </p>

        </form>
      </div>
    </section>
  )
}

export default Contact
