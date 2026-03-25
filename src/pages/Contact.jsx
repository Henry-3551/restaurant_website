import FadeInSection from '../components/FadeInSection'
import ContactPreview from '../sections/ContactPreview'

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <FadeInSection>
        <ContactPreview />
      </FadeInSection>
    </div>
  )
}

export default ContactPage
