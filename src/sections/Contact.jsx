// Contact.jsx - contact details + "My name is..." wala form (validation ke saath)
import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { personal } from '../data.js'
import SocialIcons from '../components/SocialIcons.jsx'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({}) // galtiyan yahan store hoti hain
  const [isValid, setIsValid] = useState(false) // form sahi hone par true

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // Form check karne wala function
  function validate() {
    const newErrors = {}
    if (form.name.trim() === '') newErrors.name = 'Please enter your name.'
    if (form.subject.trim() === '') newErrors.subject = 'Please tell me what you are interested in.'
    if (form.email.trim() === '') {
      newErrors.email = 'Please enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters.'
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault() // page reload nahi hoga
    const newErrors = validate()
    setErrors(newErrors)
    const formIsOk = Object.keys(newErrors).length === 0
    setIsValid(formIsOk)
    // Form sahi ho to WhatsApp khul jata hai (message pehle se likha hua)
    if (formIsOk) {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    }
  }

  // WhatsApp ka link: visitor ka message pehle se likha hua aata hai
  const whatsappText =
    `Hello Rimsha, I am ${form.name}.\nI'm interested in: ${form.subject}\nMy email: ${form.email}\n\n${form.message}`
  const whatsappLink = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(whatsappText)}`

  // Email app kholne ka link (form data ke saath)
  const mailtoLink =
    `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}` +
    `&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)}`

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="pill-label"><i></i> Get in touch</p>
          <h2>Contact Me</h2>
          <p className="contact-sub">Have a project or an opportunity in mind? Let's talk.</p>

          <a href={`mailto:${personal.email}`} className="card contact-item">
            <span className="icon-box"><Mail size={20} /></span>
            <span><small className="mono-label">Direct Email</small>{personal.email}</span>
          </a>
          <a href={`tel:${personal.phoneLink}`} className="card contact-item">
            <span className="icon-box"><Phone size={20} /></span>
            <span><small className="mono-label">Phone</small>{personal.phone}</span>
          </a>
          <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noopener noreferrer" className="card contact-item">
            <span className="icon-box"><MessageCircle size={20} /></span>
            <span><small className="mono-label">WhatsApp</small>Chat with me</span>
          </a>
          <div className="card contact-item">
            <span className="icon-box"><MapPin size={20} /></span>
            <span><small className="mono-label">Location</small>{personal.location}</span>
          </div>
          <SocialIcons />
        </div>

        <form className="card contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Send me a message</h3>

          <div className="madlib">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What is this about?" value={form.subject} onChange={handleChange} />
            {errors.subject && <p className="error">{errors.subject}</p>}

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me a little about your idea" value={form.message} onChange={handleChange}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-dark"><MessageCircle size={16} /> Send on WhatsApp</button>

          {/* Sach: message tab bhejta hai jab visitor WhatsApp mein Send dabata hai */}
          {isValid && (
            <div className="notice">
              <p>
                WhatsApp should have opened with your message ready. Please press Send there to deliver it. If
                nothing opened, use one of the buttons below.
              </p>
              <div className="notice-buttons">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-small">Open WhatsApp</a>
                <a href={mailtoLink} className="btn btn-light btn-small">Send by email instead</a>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
