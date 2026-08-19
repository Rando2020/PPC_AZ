/** Replace this adapter with an EHR implementation without changing the booking UI. */
export const bookingAdapter = {
  mode: import.meta.env.VITE_BOOKING_MODE || 'native',
  async getAvailability() {
    return [
      { id: 'request-morning', label: 'Morning preference', time: '8:00 AM–12:00 PM' },
      { id: 'request-afternoon', label: 'Afternoon preference', time: '12:00–5:00 PM' },
      { id: 'request-flexible', label: 'First available', time: 'Flexible' },
    ];
  },
  async createAppointmentRequest(payload) {
    if (this.mode === 'ehr' && import.meta.env.VITE_EHR_BOOKING_URL) {
      window.location.assign(import.meta.env.VITE_EHR_BOOKING_URL);
      return { redirected: true };
    }
    // Production hook: send payload to a secure server endpoint. Never place PHI in analytics or email URLs.
    console.info('Native appointment request ready for API integration', { ...payload, notes: payload.notes ? '[redacted]' : '' });
    return { id: crypto.randomUUID(), status: 'requested' };
  },
};
