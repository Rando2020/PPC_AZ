# Secure waitlist activation

The website is ready to embed a practice-owned Jotform waitlist. Automatic storage and notifications are not active until the steps below are complete.

## 1. Establish the protected account

1. Create the Jotform account under Prickly Pear Care, not a developer's personal account.
2. Enable Jotform's HIPAA features on an eligible plan.
3. Jennifer or another authorized practice representative must review and accept the Business Associate Agreement.
4. Require multi-factor authentication and restrict account access to authorized practice staff.

## 2. Create the form

Use the Classic form layout and title it `Prickly Pear Care patient interest registration`.

Create these visible fields:

| Field | Required | Notes |
| --- | --- | --- |
| First name | Yes | Contact information only |
| Last name | Yes | Contact information only |
| Email | Yes | Enable email validation |
| Phone | No | Do not require it for launch updates |
| ZIP code | No | Use a short text field rather than a numeric field |
| Care preference | Yes | In-person, telehealth, or either |
| Preferred timeframe | Yes | Use the three options already shown on the website |
| Consent | Yes | Use the approved consent statement below |

Do not add symptoms, diagnoses, medications, insurance IDs, date of birth, free-text medical questions, or a prior-patient relationship question.

Consent statement:

> I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.

Create these hidden fields:

| Field | Value |
| --- | --- |
| Consent version | `waitlist-2026-08` |
| Source | `pricklypearcareaz.org` |

Jotform should provide the authoritative submission ID and submission timestamp. Do not rely only on a browser-generated timestamp.

## 3. Configure notifications

Send the internal notification to `jcarlile@pricklypearcareaz.com` with the subject `New Prickly Pear Care waitlist registration`.

The notification body should not contain the submitted field values. It should say:

> A new waitlist registration was received. Sign in to the secure Jotform dashboard to review it.

Configure an autoresponder confirming receipt to the submitter. It should not repeat their answers or imply that an appointment, enrollment, or provider-patient relationship has been created.

## 4. Configure data handling

- Use Jotform Tables as the source of truth rather than Jennifer's inbox.
- Confirm CSV export works for authorized users.
- Establish a retention period and deletion procedure before launch.
- Disable third-party analytics and integrations unless separately reviewed and covered by the practice's privacy process.
- Add spam protection and test keyboard, mobile, and screen-reader behavior.

## 5. Activate the website embed

1. Copy the numeric Jotform form ID from its public form URL.
2. In GitHub, open `Settings`, `Secrets and variables`, `Actions`, then `Variables`.
3. Create the repository variable `JOTFORM_WAITLIST_FORM_ID` with the numeric form ID.
4. Run the `Deploy website to GitHub Pages` workflow or merge a new commit into `main`.

The deployment workflow exposes the ID to Vite as `VITE_JOTFORM_WAITLIST_FORM_ID`. A form ID is a public embed identifier, not an API key. Never place a Jotform API key in a `VITE_` variable or client-side code.

When the variable is absent, the site retains the prepared-email fallback. This prevents a broken form but does not provide automatic storage.

## 6. Acceptance test

Use a clearly marked test record and verify:

1. The form loads on desktop and mobile.
2. A submission appears once in Jotform Tables.
3. Consent version and source are recorded.
4. Jennifer receives a notification without submitted values.
5. The submitter receives the approved acknowledgment.
6. CSV export contains the expected columns.
7. No submitted values appear in analytics, browser URLs, GitHub logs, or notification email content.
8. The test submission can be deleted according to the documented procedure.
