import { useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { RESERVATION_BENEFITS } from '../data/content'
import { cn } from '../utils/cn'

const defaultForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

const timeSlots = ['5:30 PM', '6:00 PM', '7:30 PM', '9:00 PM']

const Reservations = () => {
  const [formData, setFormData] = useState(defaultForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = useMemo(
    () => (data) => {
      const nextErrors = {}
      if (!data.name.trim()) nextErrors.name = 'Name is required'
      if (!data.phone.trim()) nextErrors.phone = 'Phone number is required'
      if (data.phone && data.phone.replace(/\D/g, '').length < 8) nextErrors.phone = 'Enter a valid phone number'
      if (!data.email.trim()) nextErrors.email = 'Email is required'
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = 'Enter a valid email'
      if (!data.date) nextErrors.date = 'Select a date'
      if (!data.time) nextErrors.time = 'Select a seating time'
      if (!data.guests || Number(data.guests) < 1) nextErrors.guests = 'Guests must be at least 1'
      return nextErrors
    },
    [],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validate(formData)
    setErrors(validation)

    if (Object.keys(validation).length === 0) {
      setStatus('success')
      setFormData(defaultForm)
    } else {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    cn(
      'mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 transition focus:border-gold-200 focus:ring-2 focus:ring-gold-200/20',
      errors[field] && 'border-rosso focus:ring-rosso/30',
    )

  return (
    <section id="reservations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] border border-white/5 bg-white/5 p-8 shadow-glow">
          <SectionHeading
            eyebrow="Reservations"
            title="Book a table in under a minute"
            description="Choose your date, party size, and preferred seating. Our concierge will confirm with tailored wine notes within minutes."
          />
          <ul className="space-y-4 text-sm text-white/70">
            {RESERVATION_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold-200 text-[10px] text-gold-200">
                  •
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#070d0a] p-8 shadow-glow">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-white/70">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full name"
                  className={inputClass('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="mt-1 block text-xs text-rosso">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Phone
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  inputMode="tel"
                  placeholder="+234 800 000 0000"
                  className={inputClass('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="mt-1 block text-xs text-rosso">
                    {errors.phone}
                  </span>
                )}
              </label>
            </div>
            <label className="text-sm text-white/70">
              Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="guest@freshbite.ng"
                className={inputClass('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="mt-1 block text-xs text-rosso">
                  {errors.email}
                </span>
              )}
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-white/70">
                Date
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass('date')}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <span id="date-error" className="mt-1 block text-xs text-rosso">
                    {errors.date}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Time
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass('time')}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                >
                  <option value="">Select a slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <span id="time-error" className="mt-1 block text-xs text-rosso">
                    {errors.time}
                  </span>
                )}
              </label>
            </div>
            <label className="text-sm text-white/70">
              Number of guests
              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className={inputClass('guests')}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? 'guests-error' : undefined}
              />
              {errors.guests && (
                <span id="guests-error" className="mt-1 block text-xs text-rosso">
                  {errors.guests}
                </span>
              )}
            </label>
            <label className="text-sm text-white/70">
              Notes (optional)
              <textarea
                rows="3"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Allergies, anniversaries, seating preferences"
                className={cn(inputClass('notes'), 'resize-none')}
              ></textarea>
            </label>
            <div className="space-y-3">
              <Button className="w-full" type="submit">
                Book a Table
              </Button>
              <p className="text-center text-xs text-white/50" aria-live="polite">
                {status === 'success' && 'Reservation request received. Our concierge will reach out shortly.'}
                {status === 'error' && 'Please correct the highlighted fields to continue.'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservations
