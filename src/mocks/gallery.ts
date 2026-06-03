/* ═══════════════════════════════════════════════════════════════════════════
   📁  GALLERY DATA FILE  —  src/mocks/gallery.ts
   ═══════════════════════════════════════════════════════════════════════════

   WHAT IS THIS FILE?
   ─────────────────
   This file is the "brain" of your gallery page. Every single photo that
   appears on /gallery is listed here. When you want to add, remove, or
   change a photo, this is the ONLY file you need to touch.

   HOW THE GALLERY PAGE USES THIS FILE
   ───────────────────────────────────
   The Gallery page (src/pages/gallery/page.tsx) imports two things from here:
   1.  galleryCategories  →  the list of category tabs you see at the top
   2.  galleryImages     →  the list of every photo in the gallery

   The gallery page reads these arrays and automatically builds:
   • The filter tabs (Cultural Performances, Community Programs, etc.)
   • The photo grids
   • The lightbox (full-screen viewer)
   • The category preview sections on the overview page

   So if you add a new image object here, it instantly shows up on the site
   after you save and rebuild. No other files need to change.

   ═══════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────────────────
   STEP 1 OF 2  —  GALLERY CATEGORIES (the filter tabs)
   ──────────────────────────────────────────────────────────────────────────

   Each object below = one tab at the top of the gallery page.

   HOW TO ADD A NEW CATEGORY:
   1. Copy any existing line below (the part inside { })
   2. Paste it right after the last one (before the closing ] bracket)
   3. Change the id to something short and simple with NO spaces
      Example: 'sydney-tour' or 'youth-program'
   4. Change the name to what visitors will see on the tab button
      Example: 'Sydney Discovery Tour' or 'Youth Programs'
   5. Save the file

   ⚠️  IMPORTANT RULES for the id:
      • Use ONLY lowercase letters, numbers, and hyphens (-)
      • NO spaces, NO uppercase letters, NO special characters
      • This id must match the 'category' field in every image you want
        to appear under this tab

   EXAMPLE — adding a new category:
   { id: 'sydney-tour', name: 'Sydney Discovery Tour' },

   The new tab will appear automatically on the gallery page.
   ──────────────────────────────────────────────────────────────────────── */
export const galleryCategories = [
  { id: 'conference', name: 'CROP 2026 Conference' },
  { id: 'performances', name: 'Cultural Performances' },
  { id: 'community', name: 'Community Programs' },
  { id: 'team', name: 'Team & Partners' },
  { id: 'venue', name: 'Venue & Location' },
];

/* ──────────────────────────────────────────────────────────────────────────
   STEP 2 OF 2  —  GALLERY IMAGES (every single photo)
   ──────────────────────────────────────────────────────────────────────────

   Each object below = ONE photograph in the gallery.

   WHAT EACH FIELD MEANS:
   ┌─────────────┬───────────────────────────────────────────────────────────┐
   │ Field       │ What it does                                              │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ id          │ A unique code for this photo. Must be different from      │
   │             │ every other photo. Use anything simple like 'mm-001'       │
   │             │ or 'sydney-12'. Never repeat an id.                       │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ category    │ Which tab this photo belongs to. Must match one of the  │
   │             │ id values from galleryCategories above.                 │
   │             │ Example: 'performances' or 'community'                  │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ title       │ The name visitors see under the photo and in the          │
   │             │ lightbox full-screen view. Keep it short (3-6 words).   │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ description │ A 1-sentence explanation of what the photo shows.       │
   │             │ This appears in the lightbox below the title.           │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ url         │ The web address of the image file.                        │
   │             │ This is usually a Cloudinary URL (see below).             │
   ├─────────────┼───────────────────────────────────────────────────────────┤
   │ aspectRatio │ Helps the gallery decide how tall to show the photo.      │
   │             │ Choose 'wide' for landscape, 'tall' for portrait,         │
   │             │ or 'square' for square-shaped photos.                     │
   └─────────────┴───────────────────────────────────────────────────────────┘

   HOW TO ADD A NEW PHOTO:
   ───────────────────────
   1. Upload your photo to Cloudinary (drag and drop into your folder).
   2. In Cloudinary, click the photo → copy the URL.
      It will look something like:
      https://res.cloudinary.com/dhjajm7ru/image/upload/v1234567890/folder/photo.jpg
   3. Come back to this file.
   4. Find the last image object (look for the closing }, before the ]).
   5. Add a comma after that closing }, then paste your new block:

   {
     id: 'your-unique-id',
     category: 'performances',     // <-- pick the right category id
     title: 'Your Photo Title',
     description: 'A short sentence describing what is in this photo.',
     url: 'https://res.cloudinary.com/dhjajm7ru/image/upload/w_1200,q_auto,f_auto/v1234567890/folder/photo.jpg',
     aspectRatio: 'wide',          // <-- wide, tall, or square
   },

   6. Save the file.
   7. Run 'npm run dev' locally to check it looks right.
   8. When ready, run 'npm run build' and deploy.

   ────────────────────────────────────────────────────────────────────────
   CLOUDINARY URLS — HOW THEY WORK
   ────────────────────────────────────────────────────────────────────────

   Cloudinary lets you add "transformation parameters" inside the URL to
   automatically resize and optimize your image. This makes your website
   load much faster.

   Here is the SAME photo with different sizes for different uses:

   • Grid thumbnail (small):
     .../image/upload/w_600,q_auto,f_auto/.../photo.jpg

   • Lightbox full view (large):
     .../image/upload/w_1600,q_auto,f_auto/.../photo.jpg

   • Hero banner (very large):
     .../image/upload/w_1920,q_auto,f_auto/.../photo.jpg

   What each parameter means:
   ┌────────────┬────────────────────────────────────────────────────────────┐
   │ w_1200     │ Width in pixels (1200 = medium, 600 = small,             │
   │            │ 1600 = large, 1920 = hero). Adjust per use case.         │
   ├────────────┼────────────────────────────────────────────────────────────┤
   │ q_auto     │ Automatic quality — Cloudinary picks the best quality      │
   │            │ to keep file size small without making it blurry.          │
   ├────────────┼────────────────────────────────────────────────────────────┤
   │ f_auto     │ Automatic format — serves WebP to Chrome, JPEG to Safari, │
   │            │ etc. This alone can cut file size by 30-50%.              │
   └────────────┴────────────────────────────────────────────────────────────┘

   RULE: Always use w_XXX,q_auto,f_auto in gallery image URLs.
   This ensures fast loading and a professional feel.

   ────────────────────────────────────────────────────────────────────────
   MOVING A PHOTO TO A DIFFERENT CATEGORY
   ────────────────────────────────────────────────────────────────────────
   Simply change the 'category' field to the id of the new category.
   Example: change category: 'performances' to category: 'community'
   The photo will instantly move to the correct tab and section.

   ────────────────────────────────────────────────────────────────────────
   REMOVING A PHOTO
   ────────────────────────────────────────────────────────────────────────
   Delete the entire block (from { to ,) for that photo.
   Save. Rebuild. Done.
   ──────────────────────────────────────────────────────────────────────── */

export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  aspectRatio: 'tall' | 'wide' | 'square';
}

/* ──────────────────────────────────────────────────────────────────────────
   HELPER FUNCTION — for Cloudinary Multicultural Mass batch uploads
   ──────────────────────────────────────────────────────────────────────────
   This helper (mm) creates image objects automatically from Cloudinary URLs.
   You do NOT need to touch this function unless you are doing another
   large batch upload from Cloudinary.

   If you are adding photos one by one manually, skip this helper and use
   the manual format shown in the comments above.
   ──────────────────────────────────────────────────────────────────────── */
const aspects: Array<'wide' | 'tall' | 'square'> = ['wide', 'tall', 'square'];

function mm(
  idx: number,
  num: number,
  ver: string,
  code: string
): GalleryImage {
  // idx % 2 === 0  →  'performances' category
  // idx % 2 === 1  →  'community' category
  const cat = idx % 2 === 0 ? 'performances' : 'community';
  return {
    id: `mm-${idx}`,
    category: cat,
    title: `Multicultural Mass Photo ${num}`,
    description: 'A vibrant moment captured during the GPP2022 Multicultural Mass community celebration.',
    // The URL below includes Cloudinary auto-optimization:
    // w_1200 = medium size for gallery grids
    // q_auto = automatic quality compression
    // f_auto = automatic best format per browser
    url: `https://res.cloudinary.com/dhjajm7ru/image/upload/w_1200,q_auto,f_auto/${ver}/GPP2022_-_Multicultural_Mass-${num}_${code}.jpg`,
    aspectRatio: aspects[idx % 3],
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   🖼️  THE FULL GALLERY IMAGE LIST
   ═══════════════════════════════════════════════════════════════════════════

   Below is the complete list of every photo shown on the gallery page.
   They are grouped by category for readability.

   To add more photos, scroll to the bottom and add a new object inside
   the galleryImages array. Remember the comma before your new block.
   ═══════════════════════════════════════════════════════════════════════ */

export const galleryImages: GalleryImage[] = [
  /* ═══════════════════════════════════════════════════════════════════════
     CATEGORY 1: CULTURAL PERFORMANCES
     ───────────────────────────────────────────────────────────────────────
     These photos appear under the "Cultural Performances" tab and in the
     Cultural Performances preview section on the overview page.
     ═══════════════════════════════════════════════════════════════════════ */

  /* ─── Batch-uploaded Multicultural Mass photos (even idx numbers) ─── */
  mm(0, 2, 'v1779237221', 'kmwutg'),
  mm(2, 315, 'v1779237550', 'poaodn'),
  mm(4, 313, 'v1779237549', 'wmowfm'),
  mm(6, 312, 'v1779237548', 's2ehdy'),
  mm(8, 309, 'v1779237547', 'm6s681'),
  mm(10, 308, 'v1779237545', 'i32ba2'),
  mm(12, 303, 'v1779237544', 'v345uj'),
  mm(14, 306, 'v1779237543', 'atjfa7'),
  mm(16, 299, 'v1779237540', 'ucb5vq'),
  mm(18, 301, 'v1779237540', 'nai0hb'),
  mm(20, 297, 'v1779237538', 'hahdcn'),
  mm(22, 296, 'v1779237537', 'lau9zz'),
  mm(24, 292, 'v1779237536', 'zn7niw'),
  mm(26, 287, 'v1779237534', 'jjktqi'),
  mm(28, 286, 'v1779237533', 'fhhemv'),
  mm(30, 289, 'v1779237531', 'chu4ul'),
  mm(32, 284, 'v1779237528', 'uxfxhv'),
  mm(34, 283, 'v1779237525', 'kkttaz'),
  mm(36, 281, 'v1779237523', 'kgdm4c'),
  mm(38, 279, 'v1779237521', 'qio0ei'),
  mm(40, 275, 'v1779237520', 'fke1uy'),
  mm(42, 276, 'v1779237519', 'xfkzkf'),
  mm(44, 274, 'v1779237517', 'gqsvmj'),
  mm(46, 270, 'v1779237515', 'bavvk1'),
  mm(48, 271, 'v1779237514', 'kxtcfi'),
  mm(50, 268, 'v1779237513', 'vy08w1'),
  mm(52, 265, 'v1779237511', 'dzbo5t'),
  mm(54, 263, 'v1779237509', 'uszxzf'),
  mm(56, 260, 'v1779237508', 'o0kcay'),
  mm(58, 258, 'v1779237506', 'whpfcw'),
  mm(60, 257, 'v1779237505', 'g1ofkc'),
  mm(62, 255, 'v1779237503', 'bdzmp7'),
  mm(64, 254, 'v1779237502', 'duem11'),
  mm(66, 252, 'v1779237501', 'd0ujd8'),
  mm(68, 249, 'v1779237500', 's76xd6'),
  mm(70, 247, 'v1779237499', 'rmpxyn'),
  mm(72, 248, 'v1779237498', 'epopqi'),
  mm(74, 243, 'v1779237496', 'zktfed'),
  mm(76, 241, 'v1779237495', 'ifkbk3'),
  mm(78, 235, 'v1779237492', 'z96z94'),
  mm(80, 239, 'v1779237490', 'grw87d'),
  mm(82, 237, 'v1779237488', 'bnyfh1'),
  mm(84, 234, 'v1779237483', 'jff1g5'),
  mm(86, 232, 'v1779237480', 'hpv3va'),
  mm(88, 228, 'v1779237476', 'uuwj4v'),
  mm(90, 224, 'v1779237473', 'k6es0i'),
  mm(92, 229, 'v1779237472', 'oiznu8'),
  mm(94, 225, 'v1779237468', 'zpjcws'),
  mm(96, 220, 'v1779237464', 'itc5vk'),
  mm(98, 219, 'v1779237458', 'qhkbdv'),
  mm(100, 218, 'v1779237457', 'mo5jyg'),
  mm(102, 217, 'v1779237455', 'kn0eic'),
  mm(104, 214, 'v1779237452', 'zeysiv'),
  mm(106, 212, 'v1779237448', 'akv7if'),
  mm(108, 210, 'v1779237447', 'ddnow1'),
  mm(110, 211, 'v1779237446', 'eoby2x'),
  mm(112, 207, 'v1779237443', 'rjni39'),
  mm(114, 202, 'v1779237438', 'dk8jsd'),
  mm(116, 200, 'v1779237436', 'f0vese'),
  mm(118, 201, 'v1779237436', 'jel71i'),
  mm(120, 195, 'v1779237429', 'ikwhhs'),
  mm(122, 192, 'v1779237426', 'skhcyh'),
  mm(124, 194, 'v1779237422', 'fdr4wi'),
  mm(126, 189, 'v1779237420', 'byma3a'),
  mm(128, 191, 'v1779237419', 'ot45li'),
  mm(130, 190, 'v1779237418', 'noj9l0'),
  mm(132, 185, 'v1779237411', 'erc4xl'),
  mm(134, 182, 'v1779237411', 'z5c0fk'),
  mm(136, 180, 'v1779237407', 'inxwtk'),
  mm(138, 181, 'v1779237403', 'mqu5zr'),
  mm(140, 176, 'v1779237400', 'mmkybc'),
  mm(142, 173, 'v1779237399', 'du1cqp'),
  mm(144, 172, 'v1779237399', 'lbyceb'),
  mm(146, 169, 'v1779237394', 'mnclkq'),
  mm(148, 171, 'v1779237390', 'auqiqo'),
  mm(150, 165, 'v1779237381', 'wtma3o'),
  mm(152, 168, 'v1779237377', 'kzgotc'),
  mm(154, 163, 'v1779237375', 'pispnx'),
  mm(156, 159, 'v1779237362', 'l2zjgo'),
  mm(158, 162, 'v1779237362', 'pgl3bx'),
  mm(160, 157, 'v1779237361', 'oqstqf'),
  mm(162, 151, 'v1779237358', 'xvcigk'),
  mm(164, 153, 'v1779237356', 'bo4soy'),
  mm(166, 150, 'v1779237354', 'na0q4b'),
  mm(168, 144, 'v1779237347', 'oytnsg'),
  mm(170, 148, 'v1779237347', 'olcwc4'),
  mm(172, 146, 'v1779237346', 'xlb5de'),
  mm(174, 141, 'v1779237344', 'fxvdrx'),
  mm(176, 139, 'v1779237342', 'hgovew'),
  mm(178, 142, 'v1779237340', 'rhcnam'),
  mm(180, 133, 'v1779237330', 'h3qhjr'),
  mm(182, 136, 'v1779237328', 'cptolx'),
  mm(184, 135, 'v1779237326', 'aimmsr'),
  mm(186, 131, 'v1779237321', 'e9k5pr'),
  mm(188, 130, 'v1779237321', 'xfyofw'),
  mm(190, 127, 'v1779237320', 'eaehw1'),
  mm(192, 124, 'v1779237319', 'trg27l'),
  mm(194, 122, 'v1779237317', 'vghnwz'),
  mm(196, 125, 'v1779237317', 'le62ow'),
  mm(198, 117, 'v1779237313', 'mmtmth'),
  mm(200, 119, 'v1779237312', 'eujhk6'),
  mm(202, 115, 'v1779237311', 'xprqox'),
  mm(204, 114, 'v1779237310', 'xqh4km'),
  mm(206, 108, 'v1779237310', 'oxihci'),
  mm(208, 107, 'v1779237309', 'vnf5cj'),
  mm(210, 104, 'v1779237308', 'l8yaen'),
  mm(212, 109, 'v1779237307', 'xtb8ku'),
  mm(214, 102, 'v1779237304', 'olbvo0'),
  mm(216, 100, 'v1779237303', 'p0s9lm'),
  mm(218, 101, 'v1779237303', 'vczhiq'),
  mm(220, 98, 'v1779237301', 'fw1sdo'),
  mm(222, 96, 'v1779237300', 'uwdkh5'),
  mm(224, 93, 'v1779237299', 'aq0tks'),
  mm(226, 89, 'v1779237296', 'xosrod'),
  mm(228, 88, 'v1779237294', 'tbscbd'),
  mm(230, 87, 'v1779237293', 'rrfdm4'),
  mm(232, 86, 'v1779237289', 'p8il2r'),
  mm(234, 81, 'v1779237287', 'sxkcev'),
  mm(236, 82, 'v1779237286', 'ojddwu'),
  mm(238, 78, 'v1779237285', 'ehletf'),
  mm(240, 76, 'v1779237280', 'jsfzh7'),
  mm(242, 72, 'v1779237279', 'mrsdbc'),
  mm(244, 73, 'v1779237278', 'eq01ns'),
  mm(246, 71, 'v1779237275', 'pudjm1'),
  mm(248, 67, 'v1779237274', 'ifqcmk'),
  mm(250, 68, 'v1779237273', 'ltgrqq'),
  mm(252, 65, 'v1779237269', 'vdwsvs'),
  mm(254, 63, 'v1779237267', 'thsjxk'),
  mm(256, 61, 'v1779237266', 'kxc85y'),
  mm(258, 59, 'v1779237264', 'xj4sww'),
  mm(260, 58, 'v1779237264', 'ireqb3'),
  mm(262, 55, 'v1779237262', 'wuo1xf'),
  mm(264, 54, 'v1779237261', 'w29wlu'),
  mm(266, 53, 'v1779237260', 'xujz0e'),
  mm(268, 51, 'v1779237259', 'x4nb5e'),
  mm(270, 49, 'v1779237257', 'xtnuue'),
  mm(272, 45, 'v1779237256', 'mf4o7h'),
  mm(274, 44, 'v1779237252', 'waepct'),
  mm(276, 39, 'v1779237251', 'cuip5r'),
  mm(278, 41, 'v1779237249', 'ybyitl'),
  mm(280, 35, 'v1779237248', 'hinblw'),
  mm(282, 37, 'v1779237246', 'ip9jg0'),
  mm(284, 33, 'v1779237244', 'ddx1zz'),
  mm(286, 30, 'v1779237242', 'ywojle'),
  mm(288, 27, 'v1779237241', 'sebvee'),
  mm(290, 29, 'v1779237238', 'ibi3ys'),
  mm(292, 26, 'v1779237237', 'hpf67i'),
  mm(294, 23, 'v1779237234', 'bdnqrd'),
  mm(296, 21, 'v1779237234', 'u71coi'),
  mm(298, 19, 'v1779237233', 'ona6yk'),
  mm(300, 18, 'v1779237233', 'aegije'),
  mm(302, 15, 'v1779237230', 'oezjlh'),
  mm(304, 13, 'v1779237230', 'yyfvrj'),
  mm(306, 11, 'v1779237227', 'cv0rgh'),
  mm(308, 9, 'v1779237226', 'kvbzok'),
  mm(310, 6, 'v1779237225', 'vnj8cc'),
  mm(312, 3, 'v1779237224', 'ydefgb'),
  mm(314, 1, 'v1779237222', 'zzoif1'),

  /* ═══════════════════════════════════════════════════════════════════════
     CATEGORY 2: COMMUNITY PROGRAMS
     ───────────────────────────────────────────────────────────────────────
     These photos appear under the "Community Programs" tab and in the
     Community Programs preview section on the overview page.
     ═══════════════════════════════════════════════════════════════════════ */

  /* ─── Batch-uploaded Multicultural Mass photos (odd idx numbers) ─── */
  mm(1, 316, 'v1779237551', 'b20hqb'),
  mm(3, 311, 'v1779237549', 'h48zd4'),
  mm(5, 314, 'v1779237549', 'jqtp5x'),
  mm(7, 310, 'v1779237548', 'ek6pf4'),
  mm(9, 307, 'v1779237545', 'pzpgsw'),
  mm(11, 305, 'v1779237544', 'udgvjv'),
  mm(13, 304, 'v1779237543', 'jx55hz'),
  mm(15, 302, 'v1779237541', 'a85okf'),
  mm(17, 300, 'v1779237540', 'wbnkek'),
  mm(19, 294, 'v1779237538', 'mwylug'),
  mm(21, 298, 'v1779237538', 'bifk6n'),
  mm(23, 295, 'v1779237537', 'iscvyp'),
  mm(25, 293, 'v1779237535', 'q0iudu'),
  mm(27, 291, 'v1779237534', 'nhhcdk'),
  mm(29, 290, 'v1779237532', 'dmtxu0'),
  mm(31, 288, 'v1779237530', 'jjwaxe'),
  mm(33, 285, 'v1779237528', 'xupiqc'),
  mm(35, 282, 'v1779237525', 'ucfbqy'),
  mm(37, 277, 'v1779237522', 'j8iwrr'),
  mm(39, 280, 'v1779237521', 'nvk6i2'),
  mm(41, 278, 'v1779237520', 'inxebj'),
  mm(43, 273, 'v1779237517', 'ymxwig'),
  mm(45, 272, 'v1779237516', 'szhkkr'),
  mm(47, 269, 'v1779237514', 'gl632j'),
  mm(49, 267, 'v1779237514', 'qnnog7'),
  mm(51, 264, 'v1779237511', 'irh6le'),
  mm(53, 266, 'v1779237511', 'zctux9'),
  mm(55, 262, 'v1779237509', 'vhz5h8'),
  mm(57, 261, 'v1779237507', 'njhh5q'),
  mm(59, 259, 'v1779237506', 'uuuamt'),
  mm(61, 256, 'v1779237505', 'rudnfb'),
  mm(63, 253, 'v1779237503', 'qohdua'),
  mm(65, 250, 'v1779237501', 'w3lqkb'),
  mm(67, 251, 'v1779237500', 'ukgyij'),
  mm(69, 245, 'v1779237499', 'x4klhy'),
  mm(71, 244, 'v1779237498', 'ccstih'),
  mm(73, 246, 'v1779237497', 'tc6pkx'),
  mm(75, 242, 'v1779237495', 'jp0nkx'),
  mm(77, 240, 'v1779237494', 'mfwwfj'),
  mm(79, 238, 'v1779237491', 'cj0dd7'),
  mm(81, 231, 'v1779237490', 'tn2xct'),
  mm(83, 236, 'v1779237486', 'rhoxf2'),
  mm(85, 233, 'v1779237481', 'u6jwle'),
  mm(87, 230, 'v1779237476', 'xn7wbu'),
  mm(89, 227, 'v1779237475', 'iddvp2'),
  mm(91, 226, 'v1779237472', 'jl9czh'),
  mm(93, 223, 'v1779237469', 'orbqf3'),
  mm(95, 221, 'v1779237466', 'apwd2m'),
  mm(97, 222, 'v1779237463', 'e7tkwy'),
  mm(99, 213, 'v1779237457', 'qg0zmy'),
  mm(101, 216, 'v1779237456', 'a176db'),
  mm(103, 215, 'v1779237454', 'pt52aq'),
  mm(105, 208, 'v1779237448', 'acjvpv'),
  mm(107, 203, 'v1779237448', 'yzzy3c'),
  mm(109, 209, 'v1779237446', 'mrnwzy'),
  mm(111, 206, 'v1779237443', 'q57hrt'),
  mm(113, 205, 'v1779237442', 'hbuwbj'),
  mm(115, 204, 'v1779237438', 'ds39qg'),
  mm(117, 197, 'v1779237436', 'g09f9x'),
  mm(119, 199, 'v1779237432', 'ohz9gv'),
  mm(121, 196, 'v1779237426', 'gvtgku'),
  mm(123, 193, 'v1779237421', 'swnaxd'),
  mm(125, 187, 'v1779237418', 'zfsrwi'),
  mm(127, 188, 'v1779237415', 'ucyjha'),
  mm(129, 183, 'v1779237411', 'ouiwrh'),
  mm(131, 184, 'v1779237407', 'na2msp'),
  mm(133, 179, 'v1779237404', 'csqn6l'),
  mm(135, 178, 'v1779237402', 'blrfco'),
  mm(137, 175, 'v1779237400', 'smg8h3'),
  mm(139, 174, 'v1779237399', 'ujxhmp'),
  mm(141, 177, 'v1779237398', 'h2ymb1'),
  mm(143, 170, 'v1779237393', 'k5j4of'),
  mm(145, 166, 'v1779237381', 'ykspbw'),
  mm(147, 164, 'v1779237379', 'l17dah'),
  mm(149, 167, 'v1779237376', 'f5qn1c'),
  mm(151, 160, 'v1779237363', 'tkinit'),
  mm(153, 161, 'v1779237362', 'ttvmyz'),
  mm(155, 158, 'v1779237362', 'xsktwd'),
  mm(157, 156, 'v1779237359', 'zqqcmc'),
  mm(159, 152, 'v1779237356', 'ksuj4r'),
  mm(161, 155, 'v1779237355', 'rhwzac'),
  mm(163, 154, 'v1779237354', 'fiokz7'),
  mm(165, 149, 'v1779237347', 'bjhc4z'),
  mm(167, 145, 'v1779237346', 'qwu7zi'),
  mm(169, 147, 'v1779237346', 'dmkfqs'),
  mm(171, 140, 'v1779237342', 'slahjw'),
  mm(173, 143, 'v1779237341', 's4pk6t'),
  mm(175, 134, 'v1779237340', 'hkdrzi'),
  mm(177, 137, 'v1779237329', 'wyh78y'),
  mm(179, 138, 'v1779237327', 'vqkabk'),
  mm(181, 132, 'v1779237323', 'qwxb2f'),
  mm(183, 126, 'v1779237321', 'gdhf6i'),
  mm(185, 129, 'v1779237321', 'jlzvlq'),
  mm(187, 128, 'v1779237320', 'yr0emo'),
  mm(189, 123, 'v1779237318', 'v0r3or'),
  mm(191, 120, 'v1779237317', 'zjyvsz'),
  mm(193, 121, 'v1779237316', 'cjtm4l'),
  mm(195, 116, 'v1779237312', 'lyogxw'),
  mm(197, 118, 'v1779237311', 'rnx4g1'),
  mm(199, 112, 'v1779237310', 'lcj7fy'),
  mm(201, 113, 'v1779237310', 'evu81h'),
  mm(203, 111, 'v1779237309', 'wptszr'),
  mm(205, 106, 'v1779237308', 'wigcmc'),
  mm(207, 110, 'v1779237308', 'hbg73x'),
  mm(209, 105, 'v1779237305', 'b3vqfz'),
  mm(211, 103, 'v1779237304', 'ljdz2c'),
  mm(213, 99, 'v1779237303', 'rfqtoc'),
  mm(215, 94, 'v1779237301', 'kbm5jv'),
  mm(217, 95, 'v1779237300', 'hc7ybm'),
  mm(219, 97, 'v1779237300', 'auhwbc'),
  mm(221, 92, 'v1779237297', 'ep5au7'),
  mm(223, 91, 'v1779237294', 'zepg0j'),
  mm(225, 90, 'v1779237293', 'nxbm4j'),
  mm(227, 85, 'v1779237290', 'vp3eki'),
  mm(229, 84, 'v1779237288', 'wy358j'),
  mm(231, 83, 'v1779237287', 'mufzvy'),
  mm(233, 80, 'v1779237285', 'gigsxl'),
  mm(235, 79, 'v1779237283', 'vjold6'),
  mm(237, 77, 'v1779237280', 'epcbq3'),
  mm(239, 75, 'v1779237279', 'od4l8w'),
  mm(241, 74, 'v1779237278', 'jq4p8o'),
  mm(243, 70, 'v1779237274', 'npj7gg'),
  mm(245, 66, 'v1779237274', 'deiqpw'),
  mm(247, 69, 'v1779237272', 'kitqye'),
  mm(249, 64, 'v1779237268', 'zzpmpl'),
  mm(251, 62, 'v1779237267', 'etyari'),
  mm(253, 60, 'v1779237266', 'nh8hrh'),
  mm(255, 57, 'v1779237264', 'cxwvyh'),
  mm(257, 56, 'v1779237263', 'qifoqp'),
  mm(259, 52, 'v1779237261', 'a4fxbh'),
  mm(261, 48, 'v1779237260', 'tr3o6u'),
  mm(263, 46, 'v1779237259', 'n7iki5'),
  mm(265, 50, 'v1779237258', 'kjzsir'),
  mm(267, 47, 'v1779237257', 'x2yfrv'),
  mm(269, 43, 'v1779237255', 'kumgoi'),
  mm(271, 42, 'v1779237251', 'wfkvj5'),
  mm(273, 38, 'v1779237250', 'pu8t3y'),
  mm(275, 40, 'v1779237248', 'lnttu0'),
  mm(277, 36, 'v1779237247', 'zh2y8e'),
  mm(279, 32, 'v1779237244', 'm9lmlt'),
  mm(281, 34, 'v1779237243', 'r1jfdm'),
  mm(283, 31, 'v1779237242', 'vrhplo'),
  mm(285, 28, 'v1779237238', 'kxhyml'),
  mm(287, 25, 'v1779237237', 'j4p65q'),
  mm(289, 22, 'v1779237234', 'fl0pd3'),
  mm(291, 20, 'v1779237232', 'fvlwhd'),
  mm(293, 17, 'v1779237230', 'uaivqg'),
  mm(295, 14, 'v1779237229', 'x83inl'),
  mm(297, 16, 'v1779237229', 'rmjzbv'),
  mm(299, 12, 'v1779237228', 'vhduii'),
  mm(301, 10, 'v1779237226', 'ysrir1'),
  mm(303, 8, 'v1779237224', 'a4auyz'),
  mm(305, 7, 'v1779237224', 'nfiwj8'),
  mm(307, 5, 'v1779237222', 'fet6hu'),
  mm(309, 4, 'v1779237221', 'vpz1q7'),

  /* ═══════════════════════════════════════════════════════════════════════
     CATEGORY 3: CROP 2026 CONFERENCE
     ───────────────────────────────────────────────────────────────────────
     These are placeholder / mock images for the CROP 2026 Conference
     category. When you have real photos from the conference, replace
     these URLs with your Cloudinary URLs.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    id: 'conf-01',
    category: 'conference',
    title: 'Opening Ceremony 2026',
    description: 'Grand opening of CROP 2026 with keynote speakers and cultural welcome ceremony at The Dome, Sydney Showground.',
    url: 'https://readdy.ai/api/search-image?query=international%20conference%20grand%20opening%20ceremony%20large%20auditorium%20stage%20professional%20lighting%20keynote%20speaker%20podium%20diverse%20audience%20seated%20elegant%20modern%20venue%20Sydney%20Australia%20high%20quality%20photography&width=1200&height=800&seq=gallery-conf-01&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'conf-02',
    category: 'conference',
    title: 'Panel Discussion Session',
    description: 'Distinguished panel of Indigenous leaders, policymakers, and academics discussing cultural resilience frameworks.',
    url: 'https://readdy.ai/api/search-image?query=diverse%20panel%20discussion%20international%20conference%20round%20table%20professional%20setting%20Indigenous%20leaders%20policymakers%20academics%20cultural%20resilience%20modern%20conference%20room%20microphones%20presentation%20screen&width=800&height=1000&seq=gallery-conf-02&orientation=portrait',
    aspectRatio: 'tall',
  },
  {
    id: 'conf-03',
    category: 'conference',
    title: 'Workshop in Progress',
    description: 'Interactive workshop session on integrating traditional knowledge with modern sustainability practices.',
    url: 'https://readdy.ai/api/search-image?query=interactive%20workshop%20session%20diverse%20participants%20collaborating%20around%20tables%20flip%20charts%20sticky%20notes%20modern%20conference%20room%20natural%20lighting%20engaged%20discussion%20cultural%20theme%20professional%20photography&width=1200&height=800&seq=gallery-conf-03&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'conf-04',
    category: 'conference',
    title: 'Delegate Networking',
    description: 'International delegates connecting during the welcome reception at the conference foyer.',
    url: 'https://readdy.ai/api/search-image?query=professional%20networking%20event%20conference%20foyer%20diverse%20international%20delegates%20shaking%20hands%20exchanging%20business%20cards%20elegant%20modern%20venue%20warm%20lighting%20cocktail%20reception&width=800&height=1000&seq=gallery-conf-04&orientation=portrait',
    aspectRatio: 'tall',
  },
  {
    id: 'conf-05',
    category: 'conference',
    title: 'Awards Gala Evening',
    description: 'Evening gala celebrating outstanding contributions to cultural resilience and community care.',
    url: 'https://readdy.ai/api/search-image?query=elegant%20gala%20dinner%20awards%20ceremony%20large%20ballroom%20round%20tables%20candlelight%20chandelier%20stage%20presentation%20formal%20evening%20event%20celebration%20professional%20photography&width=1200&height=800&seq=gallery-conf-05&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'conf-06',
    category: 'conference',
    title: 'Closing Plenary',
    description: 'Final plenary session summarizing key outcomes and future commitments for cultural resilience.',
    url: 'https://readdy.ai/api/search-image?query=large%20conference%20plenary%20session%20auditorium%20full%20audience%20speaker%20on%20stage%20presentation%20screen%20final%20session%20professional%20modern%20venue%20bright%20lighting%20diverse%20attendees&width=1200&height=800&seq=gallery-conf-06&orientation=landscape',
    aspectRatio: 'wide',
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CATEGORY 4: TEAM & PARTNERS
     ───────────────────────────────────────────────────────────────────────
     Placeholder / mock images for the Team & Partners category.
     Replace with real team photos when available on Cloudinary.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    id: 'team-01',
    category: 'team',
    title: 'KWETU Leadership Team',
    description: 'The core leadership team behind CROP 2026 and KWETU CONNECT initiatives.',
    url: 'https://readdy.ai/api/search-image?query=diverse%20professional%20leadership%20team%20group%20photo%20modern%20office%20setting%20confident%20business%20attire%20multicultural%20team%20corporate%20portrait%20natural%20lighting%20professional%20photography&width=1200&height=800&seq=gallery-team-01&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'team-02',
    category: 'team',
    title: 'International Partnership Meeting',
    description: 'Meeting with UN agency representatives and international development partners.',
    url: 'https://readdy.ai/api/search-image?query=international%20partnership%20meeting%20diverse%20delegates%20conference%20table%20formal%20agreement%20signing%20handshake%20professional%20setting%20modern%20boardroom%20UN%20agencies%20representatives%20professional%20photography&width=800&height=1000&seq=gallery-team-02&orientation=portrait',
    aspectRatio: 'tall',
  },
  {
    id: 'team-03',
    category: 'team',
    title: 'Organizers Group Photo',
    description: 'Co-organizers from KWETU CONNECT, LDII, and Thrive Tours at CROP 2026.',
    url: 'https://readdy.ai/api/search-image?query=diverse%20organizing%20committee%20group%20photo%20conference%20venue%20smiling%20team%20multicultural%20group%20professional%20event%20organizers%20name%20badges%20lanyards%20modern%20venue%20background&width=1200&height=800&seq=gallery-team-03&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'team-04',
    category: 'team',
    title: 'Volunteer Team',
    description: 'Dedicated volunteers who made CROP 2026 possible through their commitment and energy.',
    url: 'https://readdy.ai/api/search-image?query=diverse%20volunteer%20team%20group%20photo%20matching%20t-shirts%20community%20event%20helpers%20smiling%20energetic%20team%20outdoor%20venue%20professional%20photography%20natural%20lighting%20cheerful%20atmosphere&width=1200&height=800&seq=gallery-team-04&orientation=landscape',
    aspectRatio: 'wide',
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CATEGORY 5: VENUE & LOCATION
     ───────────────────────────────────────────────────────────────────────
     Placeholder / mock images for the Venue & Location category.
     Replace with real venue photos when available on Cloudinary.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    id: 'venue-01',
    category: 'venue',
    title: 'The Dome, Sydney Showground',
    description: 'Exterior view of the iconic Dome venue hosting CROP 2026 conference proceedings.',
    url: 'https://readdy.ai/api/search-image?query=Sydney%20Showground%20The%20Dome%20exterior%20modern%20architectural%20photography%20impressive%20dome%20structure%20blue%20sky%20professional%20event%20venue%20Sydney%20Olympic%20Park%20wide%20angle%20shot%20high%20quality&width=1200&height=800&seq=gallery-venue-01&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'venue-02',
    category: 'venue',
    title: 'Sydney Olympic Park Aerial',
    description: 'Stunning aerial view of the Sydney Olympic Park precinct surrounding the conference venue.',
    url: 'https://readdy.ai/api/search-image?query=Sydney%20Olympic%20Park%20aerial%20view%20precinct%20green%20parklands%20modern%20stadium%20facilities%20Homebush%20Bay%20NSW%20Australia%20dramatic%20sky%20professional%20drone%20photography%20wide%20panoramic%20high%20quality&width=1200&height=800&seq=gallery-venue-02&orientation=landscape',
    aspectRatio: 'wide',
  },
  {
    id: 'venue-03',
    category: 'venue',
    title: 'Sydney Opera House & Harbour',
    description: 'Iconic Sydney Harbour featuring the Opera House and Harbour Bridge at golden hour.',
    url: 'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20Harbour%20Bridge%20golden%20hour%20sunset%20iconic%20Australian%20landmarks%20harbor%20view%20professional%20travel%20photography%20stunning%20sky%20reflection%20water%20high%20quality&width=800&height=1000&seq=gallery-venue-03&orientation=portrait',
    aspectRatio: 'tall',
  },
  {
    id: 'venue-04',
    category: 'venue',
    title: 'Conference Interior Setup',
    description: 'Main auditorium prepared for plenary sessions with state-of-the-art AV and seating.',
    url: 'https://readdy.ai/api/search-image?query=large%20conference%20auditorium%20interior%20modern%20venue%20stage%20setup%20professional%20lighting%20rows%20of%20seating%20presentation%20screens%20AV%20equipment%20elegant%20professional%20event%20space%20high%20quality%20photography&width=1200&height=800&seq=gallery-venue-04&orientation=landscape',
    aspectRatio: 'wide',
  },

  /* ═══════════════════════════════════════════════════════════════════════
     👇 ADD NEW PHOTOS HERE 👇
     ───────────────────────────────────────────────────────────────────────
     To add a new photo, paste a new object right above this comment block.
     Make sure to add a comma after the closing } of the previous photo.

     Example of what to paste:

     {
       id: 'my-new-photo',
       category: 'performances',
       title: 'My New Photo Title',
       description: 'A short description of what this photo shows.',
       url: 'https://res.cloudinary.com/dhjajm7ru/image/upload/w_1200,q_auto,f_auto/v1234567890/folder/photo.jpg',
       aspectRatio: 'wide',
     },

     REMEMBER:
     • The 'id' must be unique — never repeat an id.
     • The 'category' must match an id from galleryCategories above.
     • The URL must include w_1200,q_auto,f_auto for fast loading.
     • Add a comma AFTER the closing } of the previous photo.
     ═══════════════════════════════════════════════════════════════════════ */
];