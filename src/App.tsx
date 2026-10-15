import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ProjectDetail from '@/components/ProjectDetail';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import BookingCTA from '@/components/sections/BookingCTA';
import Expertise from '@/components/sections/Expertise';
import Approach from '@/components/sections/Approach';
import About from '@/components/sections/About';
import Technologies from '@/components/sections/Technologies';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import { BookingProvider, useBooking } from '@/context/BookingContext';
import { useSEO } from '@/hooks/useSEO';
import { useScrollToTop } from '@/hooks/useScroll';

function ScrollManager() { useScrollToTop(); const { hash } = useLocation(); useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 100); }, [hash]); return null; }
function Home() { useSEO({}); return <><Hero /><Work /><BookingCTA /><Expertise /><About /><Approach /><Technologies /><FAQ /><Contact /></>; }
function GlobalBookingModal() { const { isOpen, close } = useBooking(); return <BookingModal open={isOpen} onClose={close} />; }

export default function App() { return <BrowserRouter><BookingProvider><ScrollManager /><div className="min-h-screen bg-nova-black"><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/work/:slug" element={<ProjectDetail />} /><Route path="*" element={<Home />} /></Routes></main><Footer /></div><GlobalBookingModal /></BookingProvider></BrowserRouter>; }
