import FadeInSection from '../components/FadeInSection'
import MenuPreview from '../sections/MenuPreview'

const MenuPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <FadeInSection>
        <MenuPreview />
      </FadeInSection>
    </div>
  )
}

export default MenuPage
