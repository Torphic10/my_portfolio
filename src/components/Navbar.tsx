import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { useBooking } from '@/context/BookingContext';
import { useActiveSection, useScrollDirection } from '@/hooks/useScroll';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const direction = useScrollDirection();
  const active = useActiveSection(links.map((link) => link.id));
  const { open: openBooking } = useBooking();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        animate={{ y: direction === 'down' && !open ? -110 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-nova-line/80 bg-nova-black/90 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link to="/" className="text-lg font-bold tracking-tight text-nova-lime sm:text-xl">
            {profile.brand}
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <button key={link.id} onClick={() => goTo(link.id)} className={`text-sm transition-colors ${active === link.id ? 'text-nova-lime' : 'text-nova-muted hover:text-nova-white'}`}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={openBooking} className="hidden items-center gap-2 rounded-full bg-nova-lime px-5 py-2.5 text-sm font-semibold text-nova-black transition-transform hover:-translate-y-0.5 sm:inline-flex">
              Book a 10-Minute Call <ArrowUpRight size={15} />
            </button>
            <button onClick={() => setOpen(true)} className="text-nova-white lg:hidden" aria-label="Open navigation menu">
              <Menu size={23} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex flex-col bg-nova-black px-5 py-5 sm:px-8 lg:hidden">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-nova-lime">{profile.brand}</span>
              <button onClick={() => setOpen(false)} className="text-nova-white" aria-label="Close navigation menu"><X size={24} /></button>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              {links.map((link, index) => (
                <motion.button key={link.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} onClick={() => goTo(link.id)} className="border-b border-nova-line py-5 text-left text-3xl font-semibold text-nova-white">
                  {link.label}
                </motion.button>
              ))}
              <button onClick={() => { setOpen(false); openBooking(); }} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-nova-lime py-4 text-sm font-semibold text-nova-black">
                Book a 10-Minute Call <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
