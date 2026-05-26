import { useState } from 'react';
import { EMAIL, PHONE, PHONE_HREF, WHATSAPP_NUMBER } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const initialForm = { name: '', email: '', subject: '', message: '' };

function buildContactPayload(trimmed) {
  const subjectLine = trimmed.subject || `Portfolio Inquiry — ${trimmed.name}`;
  const emailBody = `From: ${trimmed.name}\nEmail: ${trimmed.email}\n\n${trimmed.message}`;
  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;

  const whatsappText = `*Portfolio Inquiry*\n\n*Name:* ${trimmed.name}\n*Email:* ${trimmed.email}\n*Subject:* ${subjectLine}\n\n*Message:*\n${trimmed.message}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  return { subjectLine, mailtoLink, whatsappLink };
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [formMsg, setFormMsg] = useState({ text: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const openWhatsApp = (whatsappLink) => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async () => {
    const { name, email, subject, message } = form;
    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setFormMsg({ text: '⚠ Please fill in your name, email, and message.', type: 'error' });
      return;
    }

    const { subjectLine, mailtoLink, whatsappLink } = buildContactPayload(trimmed);
    setSubmitting(true);
    setFormMsg({ text: '', type: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: trimmed.name,
          email: trimmed.email,
          subject: subjectLine,
          message: trimmed.message,
          _replyto: trimmed.email,
          _subject: subjectLine,
        }),
      });

      if (!response.ok) throw new Error('Email delivery failed');

      openWhatsApp(whatsappLink);
      setForm(initialForm);
      setFormMsg({
        text: `✓ Message sent to ${EMAIL}! WhatsApp opened — tap Send to deliver on WhatsApp too.`,
        type: 'success',
      });
    } catch {
      window.location.href = mailtoLink;
      openWhatsApp(whatsappLink);
      setFormMsg({
        text: '✓ Opening email & WhatsApp with your message. Please tap Send in both apps.',
        type: 'success',
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setFormMsg({ text: '', type: '' }), 6000);
    }
  };

  const onInputKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="contact">
      <div className="wrapper">
        <SectionHeader label="// 07 — Contact" title="Get In Touch" />
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal>
              <p className="contact-intro">
                I'm actively looking for entry-level cybersecurity roles — SOC Analyst, Security
                Analyst, or Junior Pentester positions. Feel free to reach out!
              </p>
              <a href={PHONE_HREF} className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">{PHONE}</div>
                </div>
              </a>
              <a
                href={whatsappHref}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">💬</div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-value">{PHONE}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{EMAIL}</div>
                </div>
              </a>
              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Tanuku, Andhra Pradesh – 534211</div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="contact-form">
            <div className="form-row">
              <div className="field">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                  onKeyDown={onInputKeyDown}
                  disabled={submitting}
                />
              </div>
              <div className="field">
                <label htmlFor="femail">Email</label>
                <input
                  type="email"
                  id="femail"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={update('email')}
                  onKeyDown={onInputKeyDown}
                  disabled={submitting}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="fsubject">Subject</label>
              <input
                type="text"
                id="fsubject"
                placeholder="Job opportunity / Collaboration"
                value={form.subject}
                onChange={update('subject')}
                onKeyDown={onInputKeyDown}
                disabled={submitting}
              />
            </div>
            <div className="field">
              <label htmlFor="fmessage">Message</label>
              <textarea
                id="fmessage"
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={update('message')}
                disabled={submitting}
              />
            </div>
            <div
              id="form-msg"
              className={formMsg.type ? `form-msg--${formMsg.type}` : undefined}
            >
              {formMsg.text}
            </div>
            <button
              type="button"
              className="btn btn-primary form-submit"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message ↗'}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
