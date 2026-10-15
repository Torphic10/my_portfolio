export type ProjectStatus = 'live' | 'in-development' | 'concept';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  scope: string[];
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  coverImage: string;
  galleryImages: string[];
  previewUrl: string;
  status: ProjectStatus;
}

const screenshot = (path: string) => `/images/projects/${path}`;

export const projects: Project[] = [
  {
    id: 'taskonda',
    slug: 'taskonda',
    title: 'Taskonda',
    category: 'Contributor & Rewards Platform',
    shortDescription: 'A digital platform where users can complete tasks, submit articles and participate in contributor reward programs.',
    scope: ['Contributor onboarding', 'Task and article submissions', 'Content approval workflows', 'Contributor rewards', 'Referral features', 'User dashboard'],
    problem: 'Contributors need a clear way to discover tasks, submit useful work, follow approval progress, and understand how rewards are connected to participation.',
    solution: 'Taskonda brings onboarding, task participation, article submissions, approvals, rewards, referrals, and the contributor dashboard into one focused platform.',
    features: ['Contributor onboarding', 'Task and article submissions', 'Content approval workflows', 'Contributor rewards', 'Referral features', 'User dashboard'],
    technologies: [],
    coverImage: screenshot('image.png'),
    galleryImages: [screenshot('image.png')],
    previewUrl: 'https://taskonda.com/',
    status: 'live',
  },
  {
    id: 'sportikedia',
    slug: 'sportikedia',
    title: 'Sportikedia',
    category: 'Sports Analysis & Community Platform',
    shortDescription: 'A sports community platform where passionate fans can publish match analysis, share their opinions and participate in community-driven rewards.',
    scope: ['Sports analysis publishing', 'Contributor profiles', 'Community ratings', 'Fan engagement', 'Reward mechanisms', 'Sports content discovery'],
    problem: 'Sports fans need a dedicated space to publish informed analysis, discover community perspectives, and participate in meaningful conversations around matches.',
    solution: 'Sportikedia combines sports analysis publishing, contributor profiles, community ratings, discovery, engagement, and rewards in one fan-focused platform.',
    features: ['Sports analysis publishing', 'Contributor profiles', 'Community ratings', 'Fan engagement', 'Reward mechanisms', 'Sports content discovery'],
    technologies: [],
    coverImage: screenshot('image%20copy.png'),
    galleryImages: [screenshot('image%20copy.png')],
    previewUrl: 'https://sportikedia.com/',
    status: 'live',
  },
  {
    id: 'mypadi',
    slug: 'mypadi',
    title: 'Mypadi',
    category: 'Social Connection Web Application',
    shortDescription: 'A social discovery platform designed to help verified adults build meaningful connections through mutual interest and privacy-focused interactions.',
    scope: ['User registration and profiles', 'Adult verification experience', 'Profile discovery', 'Connection requests', 'Privacy-focused interactions', 'Account management'],
    problem: 'Adults looking for meaningful connections need a discovery experience that puts verification, mutual interest, and privacy at the center.',
    solution: 'Mypadi structures profile discovery and connection requests around a verified-adult experience with privacy-focused interactions and account controls.',
    features: ['User registration and profiles', 'Adult verification experience', 'Profile discovery', 'Connection requests', 'Privacy-focused interactions', 'Account management'],
    technologies: [],
    coverImage: screenshot('image%20copy%202.png'),
    galleryImages: [screenshot('image%20copy%202.png')],
    previewUrl: 'https://namypadi.com/',
    status: 'live',
  },
  {
    id: 'superstory',
    slug: 'superstory',
    title: 'Superstory',
    category: 'Digital Storytelling Platform',
    shortDescription: 'A digital storytelling platform for discovering, reading and sharing relatable African stories.',
    scope: ['Story discovery', 'Reading interface', 'Content categories', 'Contributor publishing', 'User engagement', 'Responsive reading experience'],
    problem: 'Readers need a welcoming way to discover relatable stories, while contributors need a clear path to publish and share their work.',
    solution: 'Superstory brings story discovery, reading, categories, contributor publishing, and reader engagement into a responsive storytelling experience.',
    features: ['Story discovery', 'Reading interface', 'Content categories', 'Contributor publishing', 'User engagement', 'Responsive reading experience'],
    technologies: [],
    coverImage: screenshot('image%20copy%203.png'),
    galleryImages: [screenshot('image%20copy%203.png')],
    previewUrl: 'https://gistako.com/',
    status: 'live',
  },
  {
    id: 'naijafanbase',
    slug: 'naijafanbase',
    title: 'NaijaFanBase',
    category: 'Fan Community & Rewards Platform',
    shortDescription: 'A fan engagement platform bringing communities together through shared interests, points, referrals and interactive rewards.',
    scope: ['Fan profiles', 'Community participation', 'Points and rewards', 'Referral system', 'Achievement badges', 'Gamification'],
    problem: 'Fan communities need more ways to participate, build identity, and be rewarded for meaningful engagement around shared interests.',
    solution: 'NaijaFanBase is being developed around profiles, community participation, points, referrals, achievement badges, and gamified rewards.',
    features: ['Fan profiles', 'Community participation', 'Points and rewards', 'Referral system', 'Achievement badges', 'Gamification'],
    technologies: [],
    coverImage: '',
    galleryImages: [],
    previewUrl: 'https://naijafanbase.com/',
    status: 'in-development',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
