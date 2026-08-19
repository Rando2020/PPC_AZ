import { practice } from '../config/practice';

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
    const body = [
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Visit type: ${payload.visit}`,
      `Preferred date: ${payload.date}`,
      `Preferred time: ${payload.slot}`,
      '',
      'Please contact me to confirm availability. I have not included private medical information in this email.',
    ].join('\n');
    const subject = `Appointment request from ${payload.firstName} ${payload.lastName}`;
    window.location.assign(`mailto:${practice.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    return { id: crypto.randomUUID(), status: 'prepared' };
  },
};
