export interface Note {
  id: number;
  title: string;
  body: string;
  bullets: string[];
}

export const notes: Note[] = [
  {
    id: 1,
    title: 'Introduction to Next.js',
    body: 'Next.js is a React framework for building server-rendered and static web applications.',
    bullets: [
      'Supports Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'File-based routing with App Router',
      'Built-in API routes',
    ],
  },
  {
    id: 2,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      'Utility classes for styling',
      'Responsive design with breakpoints',
      'Customizable via configuration',
      'Works well with Next.js',
    ],
  },
  {
    id: 3,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      'Utility classes for styling',
      'Responsive design with breakpoints',
      'Customizable via configuration',
      'Works well with Next.js',
    ],
  },
  {
    id: 4,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      'Utility classes for styling',
      'Responsive design with breakpoints',
      'Customizable via configuration',
      'Works well with Next.js',
    ],
  },
  {
    id: 5,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      'Utility classes for styling',
      'Responsive design with breakpoints',
      'Customizable via configuration',
      'Works well with Next.js',
    ],
  },
  {
    id: 6,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      'Utility classes for styling',
      'Responsive design with breakpoints',
      'Customizable via configuration',
      'Works well with Next.js',
    ],
  },
];