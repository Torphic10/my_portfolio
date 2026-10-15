import { Facebook, Instagram, Linkedin, Music2, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';

const footerLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  return <footer className="border-t border-nova-line bg-nova-black"><div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div className="lg:col-span-2"><Link to="/" className="text-xl font-bold text-nova-lime">{profile.brand}</Link><p className="mt-4 max-w-sm text-sm leading-relaxed text-nova-muted">Web App Developer | AI-Powered Product Builder | Booking Systems Expert</p></div><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-nova-muted">Navigate</p><div className="grid grid-cols-2 gap-y-3">{footerLinks.map((link) => <a key={link.id} href={`#${link.id}`} className="text-sm text-nova-muted transition-colors hover:text-nova-lime">{link.label}</a>)}</div></div><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-nova-muted">Connect</p><div className="space-y-3">{profile.email && <a href={`mailto:${profile.email}`} className="block text-sm text-nova-muted hover:text-nova-lime">Email</a>}{profile.whatsappLink && <a href={profile.whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-sm text-nova-muted hover:text-nova-lime">WhatsApp</a>}<div className="flex gap-2 pt-2">{profile.social.facebook && <SocialIcon href={profile.social.facebook} label="Facebook" icon={<Facebook size={16} />} />}{profile.social.instagram && <SocialIcon href={profile.social.instagram} label="Instagram" icon={<Instagram size={16} />} />}{profile.social.linkedin && <SocialIcon href={profile.social.linkedin} label="LinkedIn" icon={<Linkedin size={16} />} />}{profile.social.x && <SocialIcon href={profile.social.x} label="X" icon={<Twitter size={16} />} />}{profile.social.tiktok && <SocialIcon href={profile.social.tiktok} label="TikTok" icon={<Music2 size={16} />} />}</div></div></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-nova-line pt-6 text-xs text-nova-muted sm:flex-row"><span>© {new Date().getFullYear()} {profile.brand}. All rights reserved.</span><span>Built for better business.</span></div></div></footer>;
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) { return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-nova-line text-nova-muted transition-colors hover:border-nova-lime hover:text-nova-lime">{icon}</a>; }
