import type { Project } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECTS
 *  Every card, filter, case-study page (/projects/<slug>), sitemap entry and
 *  "related projects" list is generated from this array.
 *
 *  Add a project:
 *    1. Put images in  public/images/projects/<slug>/
 *    2. Copy the TEMPLATE below into the array and fill it in.
 *    3. Set `published: true` (and `featured: true` to show it on the homepage).
 *
 *  `published: false` projects only appear in `npm run dev`, marked "Draft",
 *  so you can preview them before they go live.
 *
 *  Honesty rule: describe *your* contribution in `myRole`, mention the team in
 *  `teamContext`, and only list `results` you can stand behind.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  TEMPLATE
 *  {
 *    slug: 'my-app',
 *    title: 'My App',
 *    subtitle: 'One-line tagline',
 *    summary: 'Short description for cards and search results.',
 *    category: 'Mobile Apps',            // 'Mobile Apps' | 'Web Applications' | 'Custom Software' | 'AI & Automation'
 *    platforms: ['iOS', 'Android'],
 *    technologies: ['Flutter', 'Firebase'],
 *    year: '2024',
 *    coverImage: '/images/projects/my-app/cover.png',
 *    coverAlt: 'My App home screen on an iPhone',
 *    overview: 'What the app does and who it serves.',
 *    challenge: 'The problem being solved.',
 *    solution: 'How it was approached.',
 *    myRole: ['Built the Flutter app', 'Integrated the payments API'],
 *    teamContext: 'Worked with a designer and a backend developer.',
 *    features: [{ title: 'Feature', description: 'What it does.', image: { src: '...', alt: '...', orientation: 'portrait' } }],
 *    gallery: [{ src: '/images/projects/my-app/1.png', alt: 'Onboarding screen', orientation: 'portrait' }],
 *    results: ['Genuine outcome'],
 *    links: { appStore: 'https://...', playStore: 'https://...' },
 *    featured: true,
 *    published: true,
 *  },
 */
export const projects: Project[] = [
  {
    slug: 'jeras',
    title: 'Jeras · غراس',
    subtitle: 'Live one-on-one Islamic education for children — Quran, values and languages over video call.',
    summary:
      'An education app connecting parents with qualified teachers for private video lessons in Quran, Islamic values, languages and behaviour — with scheduling, chat and secure payments.',
    category: 'Mobile Apps',
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used, e.g. ['Flutter', 'Dart', 'Firebase', 'Stripe']
    technologies: [],
    coverImage: '/images/projects/jeras/cover.jpg',
    coverAlt: 'Jeras app screens: home, course catalogue and checkout',
    overview:
      'Jeras helps parents instil Islamic values in their children in a fun, interactive way. Families sign up, get matched with an educational supervisor, then choose a course and a teacher and book private one-on-one video sessions at times that suit them.\n\nPrograms cover bedtime stories, Quran memorisation, language learning and behaviour adjustment, offered in multiple languages — with regular progress monitoring by an educational supervisor and personalised learning plans.',
    // TODO: describe your own contribution, e.g. 'Built the Flutter app', 'Video-call integration', 'Stripe payments'
    myRole: [],
    features: [
      {
        title: 'One-on-one video lessons',
        description: 'Private, interactive video sessions between each child and a qualified educator.',
      },
      {
        title: '15+ interactive courses',
        description: 'Bedtime stories, Quran memorisation, Islamic values, private lessons and languages — for all ages and levels.',
      },
      {
        title: 'Teacher discovery & profiles',
        description: 'Browse expert teachers by subject, rating and specialisation, then book directly from their profile.',
      },
      {
        title: 'Flexible scheduling',
        description: 'Book sessions at convenient times and track upcoming and past lessons in one place.',
      },
      {
        title: 'Chat & supervisor support',
        description: 'Message teachers directly and get guidance and progress reports from an educational supervisor.',
      },
      {
        title: 'Secure payments',
        description: 'Checkout with cards via Stripe or account balance, with discount codes and confirmed bookings.',
      },
    ],
    gallery: [
      { src: '/images/projects/jeras/screen-1.jpg', alt: 'Jeras home screen with featured and top-rated courses', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-2.jpg', alt: 'Course catalogue with Bedtime Stories and Private Lessons', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-3.jpg', alt: 'Bedtime Stories course details', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-4.jpg', alt: 'Teacher directory with ratings and prices', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-5.jpg', alt: 'Teacher profile with booking options', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-6.jpg', alt: 'Support chat with the educational supervisor', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-7.jpg', alt: 'Upcoming and expired lesson schedule', orientation: 'portrait', frame: false },
      { src: '/images/projects/jeras/screen-8.jpg', alt: 'Checkout with discount code, account balance and Stripe card payment', orientation: 'portrait', frame: false },
    ],
    results: [
      '10K+ downloads on Google Play',
      '5.0★ rating on the App Store',
      'Live on iOS and Android since 2022, with regular updates',
    ],
    links: {
      appStore: 'https://apps.apple.com/eg/app/jeras-%D8%BA%D8%B1%D8%A7%D8%B3/id1612021922',
      playStore: 'https://play.google.com/store/apps/details?id=com.app.jeras',
      website: 'https://www.jeras.io/?lang=en',
    },
    featured: true,
    published: true,
    order: 1,
  },
  {
    slug: 'dream',
    title: 'Dream – Dream Interpretation',
    subtitle: 'Private calls and messages with expert dream interpreters — booked, paid and held in one app.',
    summary:
      'A consultation app where users pick an expert dream interpreter, book a private call or message session and pay securely — all in one place.',
    category: 'Mobile Apps',
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used, e.g. ['Flutter', 'Dart', 'Firebase', 'Stripe']
    technologies: [],
    coverImage: '/images/projects/dream/cover.jpg',
    coverAlt: 'Dream app screens: consultant profile, home and incoming call',
    overview:
      'Dream is a personal, 24/7 guide to understanding dreams. Users browse a panel of consultants, read their bios, credentials and reviews, pick a convenient time and call package, pay in the app and then attend a private, confidential call or message session for a personal interpretation.\n\nInterpretations draw on classical scholarship such as Ibn Sirin and Al-Nabulsi, and the app serves an international audience in Arabic, English, French and Indonesian.',
    // TODO: describe your own contribution, e.g. 'Built the Flutter app', 'In-app calling', 'Wallet & payments'
    myRole: [],
    features: [
      {
        title: 'Expert consultant directory',
        description: 'Browse consultants with bios, credentials, call counts, ratings and reviews to find the right match.',
      },
      {
        title: 'Private calls & messages',
        description: 'One-on-one, confidential voice calls and text sessions, with in-app incoming-call handling.',
      },
      {
        title: 'Appointments & call packages',
        description: 'Book a time, choose a call package and track accepted and completed sessions with remaining calls.',
      },
      {
        title: 'Secure booking & payments',
        description: 'Checkout with cards via Stripe or account balance, with promo codes and clear order details.',
      },
      {
        title: 'In-app wallet',
        description: 'Refill your balance or transfer it to another account in a couple of taps, with full payment history.',
      },
      {
        title: 'Multilingual experience',
        description: 'Switch between Arabic, English, French and Indonesian for an international audience.',
      },
    ],
    gallery: [
      { src: '/images/projects/dream/screen-1.jpg', alt: 'Dream home screen listing consultants for calls and messages', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-2.jpg', alt: 'Consultant profile with bio, stats and reviews', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-3.jpg', alt: 'Appointments list with call and message actions', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-4.jpg', alt: 'Incoming call from a consultant', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-5.jpg', alt: 'Booking checkout with promo code and Stripe payment', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-6.jpg', alt: 'Language picker with Arabic, English, French and Indonesian', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-7.jpg', alt: 'Account and profile details screen', orientation: 'portrait', frame: false },
      { src: '/images/projects/dream/screen-8.jpg', alt: 'Wallet screen to refill or transfer balance', orientation: 'portrait', frame: false },
    ],
    results: [
      '100K+ downloads on Google Play',
      '4.8★ rating on Google Play',
      '4.2★ from 138 ratings on the App Store',
      'Live on iOS and Android since 2020, with regular updates',
    ],
    links: {
      appStore: 'https://apps.apple.com/sa/app/dream-dream-interpretation/id1515745954',
      playStore: 'https://play.google.com/store/apps/details?id=com.abdulazizahmed.dream',
      website: 'https://dream-app.net/',
    },
    featured: true,
    published: true,
    order: 2,
  },
];
