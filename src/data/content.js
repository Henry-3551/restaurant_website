export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Experience', to: '/experience' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'Contact', to: '/contact' },
]

export const HERO_CONTENT = {
  eyebrow: 'Elegant Italian dining in Lagos',
  title: 'A Lagos night dressed in Italian elegance.',
  description:
    'FreshBite Kitchen crafts Michelin-inspired tasting menus that blend seasonal Nigerian produce with classic Italian technique for an intimate, slow-dining ritual.',
  stats: [
    { label: 'Seasonal tasting menus', value: '06' },
    { label: 'Signature wine pairings', value: '18' },
    { label: 'Chef experiences nightly', value: '02' },
  ],
}

export const MENU_CATEGORIES = [
  {
    id: 'starters',
    label: 'Starters',
    description: 'Bright, shareable plates to open the palate.',
    items: [
      {
        title: 'Truffle Burrata Mosaic',
        description: 'Aged burrata, charcoal tomatoes, basil oil pearls, toasted sesame crumble.',
        price: '₦18,500',
        badges: ['Signature', 'Vegetarian'],
        image:
          'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Smoked Pepper Arancini',
        description: 'Plantain risotto spheres, nduja aioli, pickled okra.',
        price: '₦14,200',
        badges: ['Spiced'],
        image:
          'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Heirloom Tomato Crudo',
        description: 'Compressed tomatoes, basil oil, citrus snow, cassava crisp.',
        price: '₦12,600',
        badges: ['Raw'],
        image:
          'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    description: 'Slow compositions to anchor the table.',
    items: [
      {
        title: 'Charred Citrus Branzino',
        description: 'Slow-grilled branzino, nduja butter, burnt lemon, pickled shallots.',
        price: '₦27,000',
        badges: ['Chef recommended'],
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Midnight Saffron Risotto',
        description: 'Arborio rice, saffron, aged parmesan cloud, smoked plantain chips.',
        price: '₦22,400',
        badges: ['Gluten-free'],
        image:
          'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Coal Charred Ribeye',
        description: '32-day ribeye, suya jus, charred leeks, bone marrow gremolata.',
        price: '₦34,800',
        badges: ['For two'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    description: 'Soft endings built with restraint.',
    items: [
      {
        title: 'Gianduja Cloud',
        description: 'Hazelnut mousse, Calabrian citrus gel, cocoa crumble.',
        price: '₦11,000',
        badges: ['New'],
        image:
          'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Burnt Honey Panna Cotta',
        description: 'Palm wine caramel, hibiscus granita, almond tuille.',
        price: '₦9,800',
        badges: ['Gluten-free'],
      },
      {
        title: 'Olive Oil Tiramisu',
        description: 'Keregbe espresso soak, mascarpone chantilly, cocoa nibs.',
        price: '₦10,400',
        badges: ['Classic'],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    description: 'Cellar-focused list curated nightly.',
    items: [
      {
        title: 'Negroni Noir',
        description: 'Smoked Campari, cocoa nib vermouth, gin, orange oil.',
        price: '₦9,500',
        badges: ['House'],
      },
      {
        title: 'Palm Spritz',
        description: 'Palm wine reduction, prosecco, grapefruit bitters.',
        price: '₦8,200',
        badges: ['Light'],
      },
      {
        title: 'Non-Alcoholic Flight',
        description: 'Rotating trio of zero-proof pairings.',
        price: '₦12,000',
        badges: ['Zero proof'],
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
]

export const EXPERIENCE_FEATURES = [
  {
    title: 'Cuisine that lingers',
    body: 'Each plate is composed like a gallery piece—layered aromatics, slow-fermented sauces, and tableside finishing that sparks conversation.',
  },
  {
    title: 'Atmosphere on purpose',
    body: 'Tactile stoneware, dim brass lighting, and curated jazz vinyl fold diners into a cocoon of warmth without feeling heavy or traditional.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      '“The truffle burrata felt like Florence at midnight—silky, intimate, unforgettable. Lagos has never tasted this refined.”',
    name: 'Nkem Onuah',
    role: 'Food critic, City Journal',
  },
  {
    quote:
      '“Reservations came with custom wine notes and a playlist. FreshBite thinks of everything before you ask.”',
    name: 'Lara Bello',
    role: 'Lifestyle editor',
  },
]

export const RESERVATION_BENEFITS = [
  'Instant confirmation with QR check-in',
  'Complimentary amuse-bouche for pre-orders',
  'Seating preferences saved for future visits',
]

export const CONTACT_DETAILS = {
  phone: '+234 803 555 1188',
  email: 'concierge@freshbite.ng',
  address: '12 Alexander Road, Ikoyi, Lagos',
  hours: 'Tue – Sun · 5:30 PM – Late',
}
