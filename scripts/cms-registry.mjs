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
  { name: 'people', label: '1. Leadership' },
  { name: 'settings', label: '2. Google and sharing' },
];

export const ENTRIES = [
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
  image: { label: 'Share picture (1200 × 630)' },
  imageAlt: { label: 'What the picture shows (for screen readers)' },
  imageWidth: { label: 'Share picture width' },
  imageHeight: { label: 'Share picture height' },
  name: { label: 'Name' },
  url: { label: 'Web address' },
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
