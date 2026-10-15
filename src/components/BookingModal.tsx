import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Clock, Video, X } from 'lucide-react';
import { profile } from '@/data/profile';

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [open, onClose]);

  return <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-nova-black/90 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-labelledby="booking-title">
    <motion.div initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-nova-line bg-nova-surface">
      <div className="flex items-center justify-between border-b border-nova-line px-5 py-4 sm:px-6">
        <div><h2 id="booking-title" className="font-semibold text-nova-white">{profile.booking.buttonText}</h2><div className="mt-1 flex flex-wrap gap-3 text-xs text-nova-muted"><span className="inline-flex items-center gap-1"><Video size={12} /> Online meeting</span><span className="inline-flex items-center gap-1"><Clock size={12} /> 10 minutes</span><span>No commitment</span></div></div>
        <button onClick={onClose} className="rounded-full border border-nova-line p-2 text-nova-muted hover:border-nova-lime hover:text-nova-lime" aria-label="Close booking dialog"><X size={17} /></button>
      </div>
      <div className="overflow-y-auto">
        {profile.schedulingUrl ? <iframe title="Schedule a 10-minute online meeting" src={profile.schedulingUrl} className="h-[620px] w-full border-0" loading="lazy" /> : <div className="flex flex-col items-center px-6 py-16 text-center"><div className="mb-5 rounded-full border border-nova-lime/30 bg-nova-lime/10 p-4 text-nova-lime"><AlertCircle size={24} /></div><h3 className="text-lg font-semibold text-nova-white">Booking link not configured</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-nova-muted">Connect a Calendly or Cal.com URL to show real availability, local time zones, online meeting details, and provider-managed confirmations here.</p><button onClick={onClose} className="mt-6 rounded-full border border-nova-lime px-5 py-2.5 text-sm font-semibold text-nova-lime hover:bg-nova-lime hover:text-nova-black">Close</button></div>}
      </div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
