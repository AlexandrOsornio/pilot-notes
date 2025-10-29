export interface Bullet{
  text: string;
  subBullets?: Bullet[];
}

export interface Note {
  id: number;
  title: string;
  body: string;
  bullets: Bullet[];
}

export const notes: Note[] = [
  {
    id: 1,
    title: 'Communications',
    body: 'Most communications take the form of the 4 Ws:\n Who you\'re talking to, who you are, where you are, what you want.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport'
      },
    ],
  },
  {
    id: 2,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport'
      },
    ],
  },
  {
    id: 3,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport',
        subBullets: [
          { text: 'Sub-bullet example 1',
            subBullets: [
              { text: 'Sub-bullet example 1' },
              { text: 'Sub-bullet example 2',
                subBullets: [
                  { text: 'Sub-bullet example 1' },
                  { text: 'Sub-bullet example 2' },
                ]
               },
            ],
           },
          { text: 'Sub-bullet example 2' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport'
      },
    ],
  },
  {
    id: 5,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport'
      },
    ],
  },
  {
    id: 6,
    title: 'Tailwind CSS Basics',
    body: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    bullets: [
      {
        text: 'In the case of Class B, C, and D airspace, a 5th W is added: "What you have" which refers to the AITIS obtained before contacting the airport'
      },
    ],
  },
];