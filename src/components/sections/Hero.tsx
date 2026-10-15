import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { profile } from '@/data/profile';
import { useBooking } from '@/context/BookingContext';

export default function Hero() {
  const { open: openBooking } = useBooking();
  const accent = profile.headlineAccent;
  const [before, after] = profile.headline.split(accent);

  return <section id="home" className="relative overflow-hidden border-b border-nova-line pt-32 sm:pt-40">
    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
      <div className="max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 flex items-start gap-3 text-xs font-semibold uppercase tracking-[.14em] text-nova-lime sm:text-sm"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-nova-lime" />{profile.role}</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }} className="max-w-5xl text-balance text-5xl font-bold leading-[.98] tracking-tight text-nova-white sm:text-7xl lg:text-8xl">{before}<span className="text-nova-lime">{accent}</span>{after}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .25 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-nova-muted sm:text-xl">{profile.subheadline}</motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .4 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={openBooking} className="group inline-flex items-center justify-center gap-2 rounded-full bg-nova-lime px-6 py-3.5 text-sm font-semibold text-nova-black transition-transform hover:-translate-y-0.5">Start Your Project <ArrowUpRight size={17} /></button>
          <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 rounded-full border border-nova-line px-6 py-3.5 text-sm font-semibold text-nova-white transition-colors hover:border-nova-lime hover:text-nova-lime">View My Work <ArrowRight size={16} /></button>
        </motion.div>
        <div className="mt-5 flex items-center gap-2 text-xs text-nova-muted"><Clock size={13} /> {profile.booking.supportingText}</div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-4 border-t border-nova-line pt-5 sm:mt-28 sm:gap-8">
        {profile.stats.map((stat) => <div key={stat.value}><div className="text-3xl font-bold text-nova-white sm:text-4xl">{stat.value}</div><div className="mt-2 max-w-[130px] text-xs leading-relaxed text-nova-muted sm:text-sm">{stat.label}</div></div>)}
      </div>
    </div>
  </section>;
}
