import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Direction = 'up' | 'down' | null;

export function useScrollDirection(): Direction {
  const [direction, setDirection] = useState<Direction>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateDirection = () => {
      const scrollY = window.scrollY;
      setDirection(scrollY > lastScrollY.current && scrollY > 100 ? 'down' : 'up');
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateDirection);
  }, []);

  return direction;
}

export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
