/**
 * Waitlist submission adapter.
 *
 * Deliberately NOT mailto:. mailto fails silently on devices with no mail
 * client configured, which is exactly the audience most likely to join a
 * waitlist from a phone.
 *
 * Set VITE_WAITLIST_ENDPOINT to any form-capture endpoint that accepts a JSON
 * POST (Formspree, Basin, Netlify Forms, a Cloudflare Worker, etc.). Until it
 * is set, the form reports honestly that signup is not live rather than
 * pretending to succeed.
 *
 * PRIVACY NOTE: this collects contact and area-of-interest only. It must never
 * collect symptoms, conditions, medications, or any other health information —
 * keeping PHI out of the waitlist is what keeps it a simple marketing list
 * rather than a regulated record.
 */
const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT || '';

export const waitlistAdapter = {
  get isLive() { return Boolean(ENDPOINT); },

  async join(payload) {
    if (!ENDPOINT) {
      return { ok: false, reason: 'not-configured' };
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          area: payload.area,
          interest: payload.interest,
          updates: payload.updates,
          source: 'website-waitlist',
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) return { ok: false, reason: 'server', status: res.status };
      return { ok: true };
    } catch {
      return { ok: false, reason: 'network' };
    }
  },
};
