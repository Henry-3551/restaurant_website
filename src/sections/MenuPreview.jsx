import { useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import MenuCard from '../components/cards/MenuCard'
import Button from '../components/ui/Button'
import SignaturePattern from '../components/visual/SignaturePattern'
import { MENU_CATEGORIES } from '../data/content'

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id)

  const currentCategory = useMemo(
    () => MENU_CATEGORIES.find((category) => category.id === activeCategory) ?? MENU_CATEGORIES[0],
    [activeCategory],
  )

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
          <SignaturePattern className="absolute -right-20 top-10 h-[300px] w-[300px]" opacity={0.25} />
          <SectionHeading
            eyebrow="Chef's edit"
            title="Menus composed like a jazz set"
            description="Each category plays a different tempo—start with bright brassica notes, end with velvet cacao."
          />
          <div className="mt-8 space-y-5 text-sm text-white/80">
            <p>
              <span className="text-xs uppercase tracking-[0.5em] text-gold-200">Slow craft</span>
              <br />
              Six-course tasting curated nightly with cellar pairings.
            </p>
            <p>
              <span className="text-xs uppercase tracking-[0.5em] text-gold-200">Locale</span>
              <br />
              Ikoyi garden herbs, Jos truffles, and cedar-aged spices.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm uppercase tracking-[0.3em] ${
                  category.id === activeCategory
                    ? 'bg-white text-charcoal'
                    : 'border border-white/30 text-white/70 hover:border-white/60'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">Currently pouring</p>
            <p className="mt-3 text-lg text-white">2021 Langhe Nebbiolo, charred citrus oil</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-white/60">{currentCategory.description}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {currentCategory.items.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1">Reserve pairing experience</Button>
            <Button className="flex-1" variant="secondary">
              Download full menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
