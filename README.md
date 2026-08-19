# Prickly Pear Care

A production-oriented, responsive website foundation for a founder-led hybrid healthcare practice in Southern Arizona.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Live website

Pushes to `main` deploy automatically through GitHub Pages at `https://rando2020.github.io/PPC_AZ/`.

## Content and assets

- Update practice details, provider biography, FAQs, and care categories in `src/config/practice.js`.
- The generated founder portrait is stored at `public/images/provider-portrait.png`; retain the original supplied portraits as the identity references for any future variants.
- Jennifer’s name, practice email, biography, and founder portrait are populated. The phone number and location remain launch placeholders.
- Medical weight-loss care and hormone therapy are identified as cash-pay services. Insurance plans, other covered services, eligibility, and prices remain intentionally uncommitted.

## Booking architecture

`src/lib/bookingAdapter.js` keeps the page independent from a future EHR. The current `native` mode collects an appointment request in the interface but does not transmit or store it.

Before launch, connect `createAppointmentRequest` to a secure, approved server workflow. To redirect into an EHR later, set:

```env
VITE_BOOKING_MODE=ehr
VITE_EHR_BOOKING_URL=https://approved-ehr.example/schedule
```

Do not send protected health information to analytics, ordinary email, or an unapproved form service.

## Before launch

1. Replace all placeholders with approved practice information and photography.
2. Confirm licensing, service eligibility, cash-pay pricing, insurance participation, and policies.
3. Connect booking/contact forms to secure production endpoints and add spam protection.
4. Have privacy, terms, accessibility, and clinical copy reviewed by qualified professionals.
5. Add the final domain, analytics consent configuration, SEO metadata, and deployment target.
