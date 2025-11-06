export interface NoteImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Bullet{
  text: string;
  images?: NoteImage[];
  subBullets?: Bullet[];
}

export interface Note {
  id: number;
  title: string;
  body: string;
  images?: NoteImage[];
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
    title: 'Pattern procedure',
    body: 'C150M configurations and procedures and for pattern work in a class G (untowered) airport.',
    bullets: [
      {
        text: 'Pattern work procedure:',
        subBullets: [
          { text: 'Check for runway, downwind, base, final are clear. Then communicate in CTAF you\'re taking the runway.',
            subBullets: [
              { text: 'Call: [Airspace name] traffic [AC Type] [callsign] departing [runway #] [airspace name]' },
            ]
           },
          { text: 'Take the runway and takeoff.',
            subBullets: [
              { text: 'Use full throtle' },
              { text: 'Adjust ailerons for Xwind correction and take out as KIAS increases' },
              { text: 'Keep plane on centerline with rudder' },
              { text: 'At 50 KIAS rotate by applying back pressure lightly' },
              { text: 'Climb at 70 KIAS' },
            ]
           },
          { text: 'Climb and at 300ft under pattern altitude make crosswind call and turn crosswind.',
            subBullets: [
              { text: 'Call: [Airspace name] traffic [callsign] crosswind [runway #] [airspace name]' },
            ] 
          },
          { text: 'When at pattern altitude, call and turn downwind.',
            subBullets: [
              { text: 'Call: [Airspace name] traffic [callsign] downwind [runway #] [airspace name]' },
            ] 
          },
          {text: 'On downwind leg, trim for 85 KIAS, complete before landing checklist.',},
          { text: 'When abeam the runway threshold, start configuring aircraft for landing.',
            subBullets: [
              { text: 'Carbheat ON' },
              { text: 'Power to 1500 RPM' },
              { text: 'When speed is in the white arc, flaps to 10 degrees' },
              { text: 'Pitch to get 70 KIAS and trim' },
            ] 
          },
          { text: 'When at 45 degrees to runway threshold, call and turn base.',
            subBullets: [
              { text: 'Call: [Airspace name] traffic [callsign] base [runway #] [airspace name]' },
            ] 
          },
          { text: 'When on base, adjust and check for traffic on straight in final.',
            subBullets: [
              { text: 'Flaps to 20 degrees' },
              { text: 'Adjust trim to maintain 70 KIAS' },
            ] 
          },
          { text: 'Call and make a shallow turn to final.',
            subBullets: [
              { text: 'Call: [Airspace name] traffic [callsign] final [runway #] [airspace name]' },
            ] 
          },
          { text: 'Adjust for landing.',
            subBullets: [
              { text: 'Flaps to 30 degrees' },
              { text: 'Trim for 60 KIAS' },
              { text: 'Adjust slip for Xwind correction or crab into the wind' },
              { text: 'Align track with runway centerline' },
            ] 
          },
          { text: 'On short final.',
            subBullets: [
              { text: 'Flaps to 40 if needed (not recommended in strong headwind)' },
              { text: 'Keep alignment with centerline' },
            ] 
          },
          { text: 'Flare shortly before aircraft touches runway.'},
          { text: 'Turn crab into slip before touchdown if crabbed.'},
          { text: 'Keep pulling back lightly keeping the plane in ground effect (same altiture) while bleeding energy (it is normal to hear stall horn).'},
          { text: 'Keep heading parallel to runway at touchdown.'},
          { text: 'After touchdown Pull back as much as possible without tailstriking or taking off again.'},
          { text: 'Once elevator is fully deflected and the nosewheel touches the runway apply brakes.'},
          { text: 'Exit runway at safe speed.'},
          { text: 'Perform after landing checklist.'},
        ]
      },
    ],
  },
  {
    id: 3,
    title: 'Flapless landing',
    body: 'Same as a regular landing but without landings and carrying +5 KIAS on base and final while on a shallower angle.',
    bullets: [],
  },
  {
    id: 4,
    title: 'Santa Paula non-standard traffic pattern',
    body: 'KSZP Does not have regular traffic pattern, use the information in the following images to plan your approach to KSZP.',
    images: [
      {
        url: 'https://santapaulaairport.com/images/SZPoverview_small.jpg',
        alt: 'Santa Paula view from above',}
    ],
    bullets: [
      {
        text: 'Left traffic for runway 22',
        images:[
          {
            url: 'https://santapaulaairport.com/images/pagebuilderck/west.jpg',
            alt: 'Santa Paula left traffic for runway 22',
            width: 1920,
            height: 1080,
          }
        ]
      },
      {
        text: 'Right traffic for runway 04',
        images:[
          {
            url: 'https://santapaulaairport.com/images/pagebuilderck/east.jpg',
            alt: 'Santa Paula right traffic for runway 04',
            width: 1920,
            height: 1080,
          }
        ]
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