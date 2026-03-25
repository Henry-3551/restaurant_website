import FadeInSection from '../components/FadeInSection'
import ReservationsSection from '../sections/Reservations'

const ReservationsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <FadeInSection>
        <ReservationsSection />
      </FadeInSection>
    </div>
  )
}

export default ReservationsPage
