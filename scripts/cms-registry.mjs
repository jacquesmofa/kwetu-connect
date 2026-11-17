/**
 * Which content files appear in the two website editors (Pages CMS and Sveltia at /admin).
 * Field types are worked out by scripts/cms-config.mjs from the JSON itself.
 * Adding content: src/content/<...>.json (top level an object) → entry below → npm run cms:config → commit.
 */

/** relay: false = Sveltia sign-in with "Sign In Using Access Token" (Hostinger sites publish from the live branch). */
export const SITE = {
  url: 'https://kwetuconnect.org',
  repo: 'jacquesmofa/kwetu-connect',
  logo: 'https://res.cloudinary.com/dhjajm7ru/image/upload/c_pad,w_192,h_192,b_white,f_png/v1780004656/Kwetu_connect_Logo_-_best_size_for_favicon_ilrvqn.png',
  relay: false,
};

export const GROUPS = [
  { name: 'pages', label: '1. KWETU pages' },
  { name: 'gallery', label: '2. Gallery' },
  { name: 'people', label: '3. Leadership' },
  { name: 'crop', label: '4. CROP 2026 pages' },
  { name: 'layout', label: '5. Menus and footers' },
  { name: 'legal', label: '6. Privacy and terms' },
  { name: 'settings', label: '7. Google and sharing' },
];

export const ENTRIES = [
  { group: 'pages', name: 'page-home', label: 'Home page', file: 'src/content/pages/home.json',
    description: 'Top to bottom: banner, summary, pillars, programs, stats and closing sections.' },
  { group: 'pages', name: 'page-about', label: 'About page', file: 'src/content/pages/about.json' },
  { group: 'pages', name: 'page-programs', label: 'Programs page', file: 'src/content/pages/programs.json' },
  { group: 'pages', name: 'page-health-recruitment', label: 'Health Recruitment page', file: 'src/content/pages/health-recruitment.json' },
  { group: 'pages', name: 'page-contact', label: 'Contact page', file: 'src/content/pages/contact.json',
    description: 'Form labels and the contact details shown on the page.' },
  { group: 'gallery', name: 'gallery', label: 'Gallery: albums and photos', file: 'src/content/gallery.json',
    description: 'Real photos only. To add an album, add it under Albums (id + name), then add photos whose Category is that album id.' },
  { group: 'gallery', name: 'page-gallery', label: 'Gallery page texts', file: 'src/content/pages/gallery.json' },
  { group: 'crop', name: 'page-crop2026', label: 'CROP 2026: main page', file: 'src/content/pages/crop2026.json' },
  { group: 'crop', name: 'page-crop2026-vision', label: 'CROP 2026: Vision', file: 'src/content/pages/crop2026-vision.json' },
  { group: 'crop', name: 'page-crop2026-pillars', label: 'CROP 2026: Pillars', file: 'src/content/pages/crop2026-pillars.json' },
  { group: 'crop', name: 'page-crop2026-programme', label: 'CROP 2026: Programme', file: 'src/content/pages/crop2026-programme.json' },
  { group: 'crop', name: 'page-crop2026-outcomes', label: 'CROP 2026: Outcomes', file: 'src/content/pages/crop2026-outcomes.json' },
  { group: 'crop', name: 'page-crop2026-venue', label: 'CROP 2026: Venue', file: 'src/content/pages/crop2026-venue.json' },
  { group: 'crop', name: 'page-crop2026-partnership', label: 'CROP 2026: Partnership', file: 'src/content/pages/crop2026-partnership.json' },
  { group: 'crop', name: 'page-crop2026-register', label: 'CROP 2026: Register', file: 'src/content/pages/crop2026-register.json' },
  { group: 'crop', name: 'page-crop2026-kwetu-connect', label: 'CROP 2026: KWETU CONNECT (co-organizer)', file: 'src/content/pages/crop2026-kwetu-connect.json' },
  { group: 'crop', name: 'page-crop2026-ldii', label: 'CROP 2026: LDII (co-organizer)', file: 'src/content/pages/crop2026-ldii.json' },
  { group: 'crop', name: 'page-crop2026-thrive-tours', label: 'CROP 2026: Thrive Tours (co-organizer)', file: 'src/content/pages/crop2026-thrive-tours.json' },
  { group: 'layout', name: 'navbar', label: 'Main menu (KWETU pages)', file: 'src/content/layout/navbar.json' },
  { group: 'layout', name: 'footer', label: 'Footer (KWETU pages)', file: 'src/content/layout/footer.json' },
  { group: 'layout', name: 'crop-subnav', label: 'CROP 2026 menu', file: 'src/content/layout/crop-subnav.json' },
  { group: 'layout', name: 'crop-footer', label: 'Footer (CROP 2026 pages)', file: 'src/content/layout/crop-footer.json' },
  { group: 'legal', name: 'page-privacy-policy', label: 'Privacy Policy', file: 'src/content/pages/privacy-policy.json' },
  { group: 'legal', name: 'page-terms-of-service', label: 'Terms of Service', file: 'src/content/pages/terms-of-service.json' },
  { group: 'people', name: 'founder', label: 'Mr Morris Kizito Mukasa: profile', file: 'src/content/founder.json',
    description: 'His profile in chapters, shown at /about/morris-kizito-mukasa and previewed on Home, About and the CROP page. His own words: change only with his approval.' },
  { group: 'settings', name: 'seo', label: 'Page titles, descriptions and share pictures', file: 'src/content/seo.json',
    description: 'What Google, Facebook, WhatsApp and LinkedIn show for each page.' },
];

export const FIELD_HINTS = {
  site: { label: 'Whole site (defaults)' },
  pages: { label: 'Pages', itemName: 'page' },
  path: { label: 'Page address', description: 'For example /about. Do not change.' },
  title: { label: 'Title (under 65 characters)' },
  description: { label: 'Description (120 to 160 characters)', type: 'text' },
  image: { label: 'Picture' },
  backgroundImage: { label: 'Background picture' },
  albums: { label: 'Albums', itemName: 'album' },
  photos: { label: 'Photos', itemName: 'photo' },
  category: { label: 'Album (id)' },
  aspectRatio: { label: 'Shape (wide, tall or square)' },
  imageAlt: { label: 'What the picture shows (for screen readers)' },
  imageWidth: { label: 'Share picture width' },
  imageHeight: { label: 'Share picture height' },
  name: { label: 'Name' },
  url: { label: 'Web address or picture' },
  locale: { label: 'Main language code' },
  localeAlternate: { label: 'Second language code' },
  shortName: { label: 'Short name' },
  role: { label: 'Role' },
  titles: { label: 'Titles (gold line under the name)', itemName: 'title' },
  identity: { label: 'Identity lines', itemName: 'line' },
  photo: { label: 'Portrait', type: 'image' },
  photoAlt: { label: 'What the portrait shows (for screen readers)' },
  chapters: { label: 'Chapters', itemName: 'chapter' },
  id: { label: 'Chapter id (do not change)' },
  teaser: { label: 'Teaser (one line shown before "Read more")', type: 'text' },
  blocks: { label: 'Text blocks, in order', itemName: 'block' },
  type: { label: 'Kind of block', description: 'paragraph = plain text; list = bullet points.' },
  text: { label: 'Text', type: 'text' },
  items: { label: 'Bullet points (for a list)', itemName: 'point' },
};
