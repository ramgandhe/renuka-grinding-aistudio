import { VideoResource } from '../types';

export const VIDEO_RESOURCES: VideoResource[] = [
  {
    id: 'journey-video',
    title: 'The Renuka Journey: 54 Years of Precision Legacy',
    category: 'Journey',
    youtubeId: 'xzygFg6NMf8',
    duration: '04:12',
    description: 'A deep look inside our Bommasandra manufacturing works, master hand-scraping techniques, assembly lines, and the engineering philosophy passed down from Mysore Kirloskar.'
  },
  {
    id: 'product-demo-awh',
    title: 'AWH CNC Cylindrical Grinder in Live Action',
    category: 'Product Demo',
    youtubeId: 'FKHEkwB4uL4',
    duration: '03:45',
    description: 'High-speed 45 m/sec grinding of stepped automotive transmission shafts. Watch the micro-step resolution, dynamic rigidity, and hydraulic tailstock auto-clamping.'
  },
  {
    id: 'product-demo-ig',
    title: 'IG CNC Internal Grinder: High Frequency Spindle Demo',
    category: 'Product Demo',
    youtubeId: 'P43-WVV_L_c',
    duration: '02:58',
    description: 'High-RPM internal ID grinding demonstration on hardened bearing steel. Shows linear M & V needle roller guides maintaining sub-micron run-out.'
  },
  {
    id: 'voc-testimonial-1',
    title: 'Voice of Customer: Automotive OEM Plant Head',
    category: 'Customer Story',
    youtubeId: 'v3P8Z9xO76E',
    duration: '02:30',
    description: '"Renuka rebuilt our critical Landis grinding line within 4 weeks. Machine run-out is better than original factory specs and uptime has remained 99% for 4 years."'
  },
  {
    id: 'voc-testimonial-2',
    title: 'Voice of Customer: Bearing Component Manufacturer',
    category: 'Customer Story',
    youtubeId: 'f3_SA27p1vA',
    duration: '03:15',
    description: '"Our SPL-90 bearing cups demand surface finish under Ra 0.1 µm. Renuka\'s internal grinding machines and quarterly AMC keep our plant running 24/7 without fail."'
  }
];

export const TESTIMONIALS_TEXT = [
  {
    quote: 'We entrusted Renuka Engineering with the complete overhaul of 12 Landis cylindrical grinding machines across our Bengaluru and Nashik plants. Their mastery of Mysore Kirloskar grinding geometry, hydro-dynamic microsphere spindle refurbishment, and modern CNC integration is unmatched in India.',
    author: 'Senior General Manager - Manufacturing Engineering',
    company: 'Tier-1 Automotive Fuel Systems Manufacturer (Bengaluru & Nashik)',
    highlight: '12 Heavy Grinders Reconditioned'
  },
  {
    quote: 'Converting our conventional Harris pin boring machines to 2-axis CNC was a high-risk technical challenge. Renuka delivered ahead of time with exceptional positioning accuracy. Cycle time dropped by 42% while tool life doubled.',
    author: 'Chief of Production & Tooling',
    company: 'Federal-Mogul Goetze (India) Ltd, Yelahanka',
    highlight: '42% Cycle Time Reduction'
  },
  {
    quote: 'Renuka manages the annual maintenance contracts for our CNC turning centers and 5-meter cylindrical grinders across multiple plants. Their technicians possess true craftsmanship in hand-scraping and rapid breakdown resolution.',
    author: 'Head of Plant Engineering',
    company: 'Wipro Infrastructure & Enterprises (Peenya, Hindupur, Chennai)',
    highlight: 'Multi-State AMC Partner'
  }
];
