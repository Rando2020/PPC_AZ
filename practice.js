export const practice = {
  name: 'Prickly Pear Primary Care',
  shortName: 'Prickly Pear',
  tagline: 'Care that grows with you.',
  description: 'Patient-led primary care in Marana — where you set the agenda, and your provider has the time to follow it.',
  serviceArea: 'Marana, Dove Mountain, Gladden Farms, Continental Ranch, Oro Valley, and northwest Tucson.',
  neighborhoods: ['Marana', 'Dove Mountain', 'Gladden Farms', 'Continental Ranch', 'Twin Peaks', 'Oro Valley', 'Avra Valley', 'Picture Rocks', 'Northwest Tucson'],
  phone: 'Coming soon',
  phoneHref: '',
  email: 'jcarlile@pricklypearcareaz.com',
  address: 'Coming soon',
  hours: ['Monday–Thursday · 8:00 AM–5:00 PM', 'Friday · By appointment'],
  provider: {
    name: 'Jennifer Carlile',
    credentials: 'MSN, FNP-C · Founder & Family Nurse Practitioner',
    bio: 'Jennifer Carlile is a board-certified Family Nurse Practitioner with more than 13 years of clinical experience across primary care, preventive health, and chronic-condition management. She opened Prickly Pear because she wanted to practice the way she believes care should work: you decide what the visit is about, and she has the time to actually get there. Born in Kenya, Jennifer has also served on international medical mission trips with Hope Without Borders.',
    portrait: '/images/provider-portrait.webp',
    npi: '1609217256',
    license: 'Arizona AP5088',
    community: 'International medical missions with Hope Without Borders',
  },
  availabilityNote: 'Prickly Pear is building toward a direct primary care membership alongside insurance-based visits and focused cash-pay programs. Membership pricing, insurance participation, and covered services are still being finalized.',
};

/* Direct primary care in Arizona is governed by A.R.S. §§ 44-1799.91–.96.
   Nurse practitioners certified in family practice qualify as direct primary
   care providers under § 44-1799.91(4)(a)(iii). Every claim below is written
   to stay inside what the statute allows a practice to say before an
   agreement exists. Counsel should review before launch. */
export const dpc = {
  status: 'In development',
  headline: 'Direct primary care, built for Marana.',
  intro: 'A flat monthly membership for people who want their provider reachable, their visits unhurried, and their costs predictable — no copays, no surprise billing, no fifteen-minute clock.',
  benefits: [
    ['Unhurried visits', 'Appointments measured in the time your questions take, not in billing units.'],
    ['Direct access', 'Message or call Jennifer directly during practice hours — not a phone tree.'],
    ['Predictable cost', 'One flat monthly fee. You know what care costs before you walk in.'],
    ['Same provider, every time', 'You build a relationship with one clinician who knows your history.'],
  ],
  disclaimer: 'A direct primary care membership is not health insurance and is not a substitute for it. Members are encouraged to keep coverage for hospital care, specialists, and emergencies. Under Arizona law, primary care services covered by a membership are not billed to your health insurance.',
};

export const serviceCategories = [
  { icon: 'heart', title: 'Direct primary care membership', description: 'A flat monthly fee for unhurried visits and direct access to your provider. Membership terms and pricing are being finalized now.', status: 'In development' },
  { icon: 'sparkle', title: 'Insurance-based visits', description: 'Traditional covered primary care for patients who prefer to use their health plan. Participating plans will be published once confirmed.', status: 'Planned' },
  { icon: 'flower', title: 'Weight management & hormone therapy', description: 'Clinician-guided programs offered outside insurance through transparent cash-pay pricing. Eligibility requires a clinical assessment.', status: 'Cash pay' },
];

export const faqs = [
  ['What is direct primary care?', 'Direct primary care is a membership arrangement: you pay your provider a flat periodic fee, and in exchange you get primary care without copays or per-visit billing. Because the practice is not billing an insurer for those visits, appointments can be longer and access is more direct. Arizona recognizes these agreements in statute (A.R.S. §§ 44-1799.91–.96).'],
  ['Is a membership the same as insurance?', 'No. A direct primary care membership is not health insurance and does not replace it. You remain responsible for costs outside the agreement, and we strongly encourage members to keep coverage for hospital care, specialists, imaging, and emergencies.'],
  ['Can I use my insurance and a membership together?', 'Many people do. A membership covers your primary care relationship; your insurance covers the things a primary care office does not. Under Arizona law, the practice cannot bill your insurer for primary care services already covered by your membership.'],
  ['Will you accept insurance?', 'The plan is to offer insurance-based visits alongside membership. Participating plans and covered visit types are still being finalized and will be published before opening.'],
  ['Do you serve areas outside Marana?', 'Yes. Prickly Pear expects to serve Marana, Dove Mountain, Gladden Farms, Continental Ranch, Twin Peaks, Oro Valley, Avra Valley, Picture Rocks, and northwest Tucson.'],
  ['When will Prickly Pear open?', 'Opening timing is being finalized. Join the interest list and you will hear first when membership and scheduling go live.'],
  ['Can I book online?', 'Yes. The site accepts appointment requests now and is built to connect to a scheduling system when the practice opens.'],
  ['Is this form for urgent medical needs?', 'No. Do not use website forms for emergencies or urgent symptoms. Call 911 for an emergency.'],
];
