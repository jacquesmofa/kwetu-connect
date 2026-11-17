# Placeholders and open questions: KWETU Connect

## Leadership profile (15 Nov 2026)
- Mr Morris Kizito Mukasa's profile is his own text (received 15 Nov 2026), word for word, in `src/content/founder.json`. Page: `/about/morris-kizito-mukasa`; previews on Home, About and the CROP "KWETU Connect" page.
- His title is now "Chief Executive Officer, KWETU CONNECT PTY LTD" (from his text). The old site said "Founder & Director".
- Removed because they are not in his new text: the 2023 award year, "Community Transformative Award (2024)", "Oceania region King's representative", the business development role, and the line about his wife and children. Ask him if any should come back.
- Portrait: the photo Jacques sent on 15 Nov 2026, kept in the repo (`public/media/morris-kizito-mukasa.webp`).
- Removed from the About page: three invented team members with AI portraits (James Chen, Dr. Sarah Williams, Michael Nguyen). Add real team members only.

## Still to confirm
- About page figures "500+ Communities Served, 50+ Partnerships, 15 Countries, 10+ Years Experience": kept for now at Jacques' request (15 Nov); still to be confirmed by the client.
- Publishing: the only address is https://kwetuconnect.org on Hostinger (confirmed 15 Nov). Publishing is automatic since 17 Nov 2026 (GitHub `live` branch → Hostinger Git), no passwords.
- Forms: all four go through Web3Forms to info@kwetuconnect.org (`src/lib/forms.ts`). Send one test from each after the first deploy.
- Readdy AI pictures remain across the site (count them with `grep -rc readdy.ai/api/search-image src`).

## Removed 17 Nov 2026 (invented, never confirmed)
- Home page testimonials: "Dr. Sarah Mitchell, Director, Global Health Initiative", "Prof. James Okonkwo, Cultural Studies, University of Sydney", "Maria Rodriguez, CEO, Community Care Services", each with an AI portrait.
- Health Recruitment testimonials: "Grace Mwangi", "Ahmed Hassan", "Maria Santos", each with an AI portrait.
- Gallery: 14 AI pictures presented as real photos ("Opening Ceremony 2026", "KWETU Leadership Team", "Organizers Group Photo", venue pictures...) and their three tabs. The gallery now shows only the 313 real photos of the 2022 Multicultural Mass, as one album.
- Real testimonials and real CROP 2026 photos can be added when the client sends them (with each person's permission).

## Still to confirm (added 17 Nov 2026)
- Gallery album name: "Multicultural Mass 2022" comes from the photo file names (GPP2022 - Multicultural Mass). What does GPP stand for, and where was it held?
- CROP page for LDII writes the name as "Livelihood Development International Initiatives"; LDII's own site says "LD International Initiatives". Which is right?
- CROP 2026 (6 to 8 Nov 2026) is over: the pages still speak about it in the future ("Join 800+ leaders", "Register"). They need real outcomes and photos from the client before they can be rewritten.
