export interface Service {
  icon: 'CalendarDays' | 'PanelsTopLeft' | 'ShoppingBag';
  title: string;
  description: string;
  price: string;
}

export const services: Service[] = [
  {
    icon: 'CalendarDays',
    title: 'Booking & Appointment Systems',
    description: 'Online scheduling, booking management, payment integrations, and automated workflows.',
    price: 'From $500',
  },
  {
    icon: 'PanelsTopLeft',
    title: 'Custom Web Applications',
    description: 'MVPs, business dashboards, portals, and digital products.',
    price: 'From $800',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-commerce Development',
    description: 'Online storefronts, checkout experiences, product management, and order workflows.',
    price: 'From $600',
  },
];

export const approachSteps = [
  { number: '01', title: 'Discovery', description: 'We discuss your idea, goals and business requirements.' },
  { number: '02', title: 'Planning', description: 'I map out the features, user experience and technical approach.' },
  { number: '03', title: 'Development', description: 'Your application is designed, built and tested.' },
  { number: '04', title: 'Launch', description: 'We prepare your product for deployment and real-world use.' },
];

export const technologies = [
  { category: 'Frontend Development', items: ['React', 'TypeScript', 'Responsive interfaces'] },
  { category: 'Backend & Databases', items: ['Supabase', 'PostgreSQL', 'Secure data flows'] },
  { category: 'AI & Automation', items: ['AI-powered workflows', 'Process automation', 'Structured prompts'] },
  { category: 'Deployment & Integrations', items: ['Payments', 'Scheduling', 'Third-party integrations'] },
];

export const faqItems = [
  { question: 'What kind of web applications do you build?', answer: 'I build booking platforms, business dashboards, portals, MVPs, e-commerce experiences, and custom digital products around a clear business need.' },
  { question: 'How much does a booking system cost?', answer: 'Booking systems start from $500. Final pricing depends on the workflows, integrations, roles, and customer experience your project needs.' },
  { question: 'Can you build a custom business management system?', answer: 'Yes. We can map the operational problem first, then build the smallest useful system around the way your business actually works.' },
  { question: 'Do you work with international clients?', answer: 'Yes. Global clients are welcome, and the first conversation can happen online.' },
  { question: 'How long does a typical project take?', answer: 'The timeline depends on scope and feedback cycles. A focused project can be planned quickly, while a broader product needs more discovery and iteration.' },
  { question: 'Can you integrate payments and automated notifications?', answer: 'Yes, when the selected provider and project requirements support them. We confirm the exact integrations during planning.' },
  { question: 'How do we get started?', answer: 'Book a free 10-minute online meeting. We will discuss the idea, the problem behind it, and what a sensible first version could include.' },
];
