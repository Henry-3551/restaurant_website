import FadeInSection from '../components/FadeInSection'
import ExperienceSection from '../sections/Experience'

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <FadeInSection>
        <ExperienceSection />
      </FadeInSection>
    </div>
  )
}

export default ExperiencePage
