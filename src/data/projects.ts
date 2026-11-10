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
 *    industries: ['Health', 'Fintech'],  // any labels — filters are generated from these
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
    industries: ['Education'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used, e.g. ['Flutter', 'Dart', 'Firebase', 'Stripe']
    technologies: [],
    icon: '/images/projects/jeras/icon.jpg',
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
    order: 11,
  },
  {
    slug: 'dream',
    title: 'Dream – Dream Interpretation',
    subtitle: 'Private calls and messages with expert dream interpreters — booked, paid and held in one app.',
    summary:
      'A consultation app where users pick an expert dream interpreter, book a private call or message session and pay securely — all in one place.',
    category: 'Mobile Apps',
    industries: ['Lifestyle', 'Marketplace'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used, e.g. ['Flutter', 'Dart', 'Firebase', 'Stripe']
    technologies: [],
    icon: '/images/projects/dream/icon.jpg',
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
    order: 10,
  },
  {
    slug: 'braiding-nairobi',
    title: 'Braiding Nairobi',
    subtitle: 'A two-sided marketplace bringing professional hair braiding to clients’ doorsteps.',
    summary:
      'A booking marketplace connecting clients with screened braiders and salons — real-photo styles, reviews, in-app chat, reminders and secure upfront payments.',
    category: 'Mobile Apps',
    industries: ['Beauty', 'Marketplace'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/braiding-nairobi/icon.jpg',
    coverImage: '/images/projects/braiding-nairobi/cover.jpg',
    coverAlt: 'Braiding Nairobi app screens: client home, salon profile and chat',
    overview:
      'Braiding Nairobi brings the salon experience to the client’s doorstep. Clients explore braiding styles through real photos, compare prices and reviews, and book screened braiders for home appointments in real time.\n\nFor salons and braiders it is a growth tool: exposure to new clients, help filling last-minute cancellations, premium pricing for popular time slots, protection against no-shows, and a professional online booking page.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Style discovery with real photos',
        description: 'Browse braiding styles, prices and reviews to find the perfect look and braider.',
      },
      {
        title: 'Real-time booking',
        description: 'Book home appointments, find last-minute availability and get reminders so sessions are never missed.',
      },
      {
        title: 'Client–braider chat',
        description: 'Message your braider directly; transport and logistics are handled for you.',
      },
      {
        title: 'Secure upfront payments',
        description: 'Payments are processed before the service begins, with deposits and no-show protection for salons.',
      },
      {
        title: 'Salon growth tools',
        description: 'Marketing exposure, cancellation backfill and peak-time pricing to increase salon revenue.',
      },
      {
        title: 'Screened professionals',
        description: 'Braiders are vetted and submit portfolios before joining, so clients can book with confidence.',
      },
    ],
    gallery: [
      { src: '/images/projects/braiding-nairobi/screen-1.jpg', alt: 'Salon listing on the client home screen', orientation: 'portrait', frame: false },
      { src: '/images/projects/braiding-nairobi/screen-2.jpg', alt: 'Braiding Nairobi app, built for African women', orientation: 'portrait', frame: false },
      { src: '/images/projects/braiding-nairobi/screen-3.jpg', alt: 'Join as a client or as a salon', orientation: 'portrait', frame: false },
      { src: '/images/projects/braiding-nairobi/screen-4.jpg', alt: 'Salon profile with styles, prices and reviews', orientation: 'portrait', frame: false },
      { src: '/images/projects/braiding-nairobi/screen-5.jpg', alt: 'Request a braider to your home in real time', orientation: 'portrait', frame: false },
    ],
    results: ['5.0★ rating on the App Store', 'Live on iOS and Android since 2024, with regular updates'],
    links: {
      appStore: 'https://apps.apple.com/us/app/braiding-nairobi/id6474686521',
      playStore: 'https://play.google.com/store/apps/details?id=com.braidingnairobi.braiding_nairobi',
      website: 'https://www.braidingnairobi.com/',
    },
    featured: false,
    published: true,
    order: 7,
  },
  {
    slug: 'talli',
    title: 'Talli: A Social Scoreboard',
    subtitle: 'One app, every game — track wins, rivalries and lifetime stats with friends.',
    summary:
      'A social scoreboard for everyday games and sports: live scorekeeping, head-to-head rivalries, stats dashboards and a social feed of friends’ results.',
    category: 'Mobile Apps',
    industries: ['Sports', 'Social'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/talli/icon.jpg',
    coverImage: '/images/projects/talli/cover.jpg',
    coverAlt: 'Talli app screens: profile stats, versus profile and game submission',
    overview:
      'Talli turns everyday games into rivalries. Whether it is a pickleball match, a board game or a video game, players record scores, build lifetime stats and see who really comes out on top — no more pen and paper or mental maths.\n\nIt is as much a community as a score tracker: friends follow each other’s results, react to wins and keep each other accountable.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Personal profiles',
        description: 'A lifetime record of wins, losses and draws that grows with every game played.',
      },
      {
        title: 'Versus profiles',
        description: 'Detailed head-to-head breakdowns against every competitor to settle rivalries.',
      },
      {
        title: 'Live scorekeeping',
        description: 'Keep live scores for up to four players or teams — great for doubles and group games.',
      },
      {
        title: 'Game stats dashboard',
        description: 'Most played games, top competitors, top teammates, win/loss trends and more.',
      },
      {
        title: 'Social feed',
        description: 'A real-time feed of friends’ games with Likes and “Oh Snap” reactions.',
      },
      {
        title: 'Gloat notifications',
        description: 'Send a friendly gloat after a close win to keep the banter going.',
      },
    ],
    gallery: [
      { src: '/images/projects/talli/screen-1.jpg', alt: 'Talli — a social scoreboard', orientation: 'portrait', frame: false },
      { src: '/images/projects/talli/screen-2.jpg', alt: 'Create a profile with lifetime stats', orientation: 'portrait', frame: false },
      { src: '/images/projects/talli/screen-3.jpg', alt: 'Versus profile comparing two competitors', orientation: 'portrait', frame: false },
      { src: '/images/projects/talli/screen-4.jpg', alt: 'Choose the game or activity you played', orientation: 'portrait', frame: false },
      { src: '/images/projects/talli/screen-5.jpg', alt: 'Submit the result of a game', orientation: 'portrait', frame: false },
    ],
    results: ['5.0★ rating on the App Store', 'Live on iOS and Android since 2024'],
    links: {
      appStore: 'https://apps.apple.com/us/app/talli-a-social-scoreboard/id6581483176',
      playStore: 'https://play.google.com/store/apps/details?id=com.talli.talli.talli',
    },
    featured: false,
    published: true,
    order: 4,
  },
  {
    slug: 'rox',
    title: 'ROX – Real Online Experience',
    subtitle: 'Jazz’s next-generation lifestyle app — mobile packages, perks, events and gaming in one place.',
    summary:
      'A large-scale lifestyle and telecom app for Jazz: manage mobile usage and packages, unlock perks and discounts, discover events and play games for rewards.',
    category: 'Mobile Apps',
    industries: ['Telecom', 'Lifestyle'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/rox/icon.jpg',
    coverImage: '/images/projects/rox/cover.jpg',
    coverAlt: 'ROX app screens: package selection, home and perks',
    client: 'Jazz (Pakistan Mobile Communications Ltd)',
    overview:
      'ROX is a next-generation lifestyle app from Jazz, one of Pakistan’s largest mobile networks. Users manage their mobile usage, subscribe to high-allowance packages, and get access to exclusive perks and experiences — all in one place.\n\nThe app brings together ROX Connect (monthly packages for individuals and groups), ROX Vault (premium perks, discounts and giveaways), ROX Life (live events, concerts, gaming tournaments and merchandise), ROX High Street (fashion and handset deals) and ROX Arena (casual games with rewards and leaderboards).',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Packages & subscriptions',
        description: 'Pick a “vibe” — high-allowance data and minutes bundles with bundled subscriptions and cashback.',
      },
      {
        title: 'Perks & rewards',
        description: 'Exclusive discounts and giveaways from partner brands for ROX subscribers.',
      },
      {
        title: 'Entertainment & gaming',
        description: 'Streaming, music and gaming add-ons, plus ROX Arena games with rewards and leaderboards.',
      },
      {
        title: 'Usage & account management',
        description: 'Track internet, calls, SMS, subscriptions and recharges, and manage your balance.',
      },
      {
        title: 'Seamless onboarding',
        description: 'Join with a new SIM, switch from prepaid or postpaid, or port from another network.',
      },
      {
        title: 'In-app support',
        description: 'FAQs, video tutorials, walkthroughs, suggestions and complaint tracking in one place.',
      },
    ],
    gallery: [
      { src: '/images/projects/rox/screen-1.jpg', alt: 'Join the squad onboarding options', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-2.jpg', alt: 'ROX login screen', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-3.jpg', alt: 'Pick your vibe package selection', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-4.jpg', alt: 'Add-ons for streaming, music and gaming', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-5.jpg', alt: 'Home dashboard with remaining package and perks', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-6.jpg', alt: 'Support hub with FAQs, tutorials and complaints', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-7.jpg', alt: 'Account with balance and subscription usage', orientation: 'portrait' },
      { src: '/images/projects/rox/screen-8.jpg', alt: 'Usage logs for internet, calls and SMS', orientation: 'portrait' },
    ],
    results: [
      '10M+ downloads on Google Play',
      '4.6★ from 10,700+ ratings on the App Store',
      '103K+ reviews on Google Play',
      'Live on iOS and Android since 2024, with frequent releases',
    ],
    links: {
      appStore: 'https://apps.apple.com/pk/app/rox-real-online-experience/id6469692120',
      playStore: 'https://play.google.com/store/apps/details?id=com.jazz.rox',
      website: 'https://rox.com.pk',
    },
    featured: true,
    published: true,
    order: 3,
  },
  {
    slug: 'layla',
    title: 'Layla Eco',
    subtitle: 'The app for an AI-powered smart sensor that helps property managers save energy and stay in control.',
    summary:
      'Companion app for Layla’s AI-powered property sensor — air, comfort, noise and presence insights, sleep scores, smart alerts and remote AC control across every property.',
    category: 'Mobile Apps',
    industries: ['AI', 'IoT & Smart Home'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/layla/icon.jpg',
    coverImage: '/images/projects/layla/cover.jpg',
    coverAlt: 'Layla Eco app screens: sleep score, property summary and presence alerts',
    overview:
      'Layla is an AI-powered, plug-and-play smart sensor for properties. It automates energy saving, enhances security and helps prevent unexpected events — and the Layla Eco app gives property managers and homeowners full control from one place.\n\nThe app turns raw sensor data into clear, actionable insight: a daily score for air, comfort and quiet in every room, explanations of what happened overnight and what to do about it, privacy-first presence detection, and remote control of air conditioning — across a single home or a whole portfolio.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Daily property score',
        description: 'One score for air quality, comfort and quiet in every room — your home, finally explained.',
      },
      {
        title: 'Sleep score & AI insights',
        description: 'See what helped or hurt last night, and get one clear recommendation for tonight.',
      },
      {
        title: 'Real-time noise alerts',
        description: 'Know when a party starts — decibel monitoring and alerts without recording a word.',
      },
      {
        title: 'Privacy-first presence',
        description: 'Radar-based presence and motion alerts with no cameras and no images recorded.',
      },
      {
        title: 'Healthy air, room by room',
        description: 'Live CO₂, temperature and humidity, with nudges to open a window when air gets stale.',
      },
      {
        title: 'Energy saving & AC control',
        description: 'Control air conditioning remotely with Eco mode and schedules, across every property.',
      },
    ],
    gallery: [
      { src: '/images/projects/layla/screen-1.jpg', alt: 'Property summary with air, comfort and quiet scores', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-2.jpg', alt: 'Sleep score explaining the night', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-3.jpg', alt: 'AI insight with a recommendation for tonight', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-4.jpg', alt: 'Real-time noise alerts', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-5.jpg', alt: 'Camera-free presence and motion detection', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-6.jpg', alt: 'Indoor air quality room by room', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-7.jpg', alt: 'Remote AC control with Eco mode', orientation: 'portrait', frame: false },
      { src: '/images/projects/layla/screen-8.jpg', alt: 'All properties in one app', orientation: 'portrait', frame: false },
    ],
    results: ['5.0★ rating on the App Store', 'Live on iOS and Android since 2023, with regular updates'],
    links: {
      appStore: 'https://apps.apple.com/ua/app/layla-eco/id1619471557',
      playStore: 'https://play.google.com/store/apps/details?id=com.layla.electric.layla',
      website: 'https://layla.eco',
    },
    featured: true,
    published: true,
    order: 1,
  },
  {
    slug: 'mysalam',
    title: 'mySalam',
    subtitle: 'The self-care app for Salam mobile customers in Saudi Arabia — buy a line, activate, track and recharge.',
    summary:
      'Telecom self-care app for Salam: buy a SIM or eSIM line, activate it in minutes, track data and balance, and recharge instantly — used by 1M+ customers.',
    category: 'Mobile Apps',
    industries: ['Telecom'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/mysalam/icon.jpg',
    coverImage: '/images/projects/mysalam/cover.jpg',
    coverAlt: 'mySalam app screens: buy a line, account balance and recharge',
    client: 'Salam (Integrated Telecom Company)',
    overview:
      'mySalam is the official self-care app for Salam mobile customers in Saudi Arabia. It puts the whole customer journey in one place — from choosing and buying a line to activating the SIM, keeping an eye on usage and recharging.\n\nNew customers can become part of the Salam world in under two minutes, while existing customers check their balance and data consumption, plan their usage and top up from their phone wallet with any amount they choose.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Buy a line in-app',
        description: 'Browse prepaid plans with data, voice, SMS and social bundles, and order a SIM or eSIM.',
      },
      {
        title: 'Fast SIM activation',
        description: 'Activate a new SIM with its ICCID number — onboarding in under two minutes.',
      },
      {
        title: 'Balance & usage tracking',
        description: 'See your active plan, remaining local and social data, expiry date and balance at a glance.',
      },
      {
        title: 'Instant recharge',
        description: 'Top up with predefined packages or any custom amount, paid from your phone wallet.',
      },
      {
        title: 'Device offers',
        description: 'Discover and buy the latest smartphones, such as new iPhones, directly in the app.',
      },
      {
        title: 'Account management',
        description: 'Secure login, quick actions and profile management for every Salam line.',
      },
    ],
    gallery: [
      { src: '/images/projects/mysalam/screen-1.jpg', alt: 'Log in to your Salam account', orientation: 'portrait', frame: false },
      { src: '/images/projects/mysalam/screen-2.jpg', alt: 'Buy a new line with a prepaid plan', orientation: 'portrait', frame: false },
      { src: '/images/projects/mysalam/screen-3.jpg', alt: 'Activate your SIM card', orientation: 'portrait', frame: false },
      { src: '/images/projects/mysalam/screen-4.jpg', alt: 'Check your balance and data usage', orientation: 'portrait', frame: false },
      { src: '/images/projects/mysalam/screen-5.jpg', alt: 'Recharge your line', orientation: 'portrait', frame: false },
    ],
    results: [
      '1M+ downloads on Google Play',
      '4.4★ from 25,000+ ratings on the App Store',
      '57K+ reviews on Google Play',
      'Live on iOS and Android since 2022, with frequent releases',
    ],
    links: {
      appStore: 'https://apps.apple.com/sa/app/mysalam/id1583935151',
      playStore: 'https://play.google.com/store/apps/details?id=com.salam.app.android',
    },
    featured: true,
    published: true,
    order: 9,
  },
  {
    slug: 'etgahwa',
    title: 'Etgahwa',
    subtitle: 'Coffee is better when it’s shared — a coffee wallet and gifting app for cafés across Saudi Arabia.',
    summary:
      'A coffee wallet and gifting app: top up “Beans”, earn bonus Beans, pay at partner cafés by QR code and send coffee to friends in seconds.',
    category: 'Mobile Apps',
    industries: ['Food & Drink', 'Fintech'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/etgahwa/icon.jpg',
    coverImage: '/images/projects/etgahwa/cover.jpg',
    coverAlt: 'Etgahwa app screens: onboarding, Beans wallet and coffee packages',
    client: 'Madarat Communications',
    overview:
      'Etgahwa gives people a new way to enjoy coffee — whether they’re buying one for themselves or sending one to someone they care about.\n\nUsers top up a balance of “Beans”, get bonus Beans on eligible packages and spend them at participating cafés across Saudi Arabia by scanning a QR code. When someone deserves a coffee, they simply send them Beans and let them choose where to enjoy it.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Beans wallet',
        description: 'A coffee balance showing total, gifted, bonus and purchased Beans — and how many coffees they’re worth.',
      },
      {
        title: 'Top-up packages',
        description: 'Choose a package and get bonus Beans on eligible top-ups.',
      },
      {
        title: 'Send coffee as a gift',
        description: 'Send Beans to anyone in seconds and let them pick the café.',
      },
      {
        title: 'QR redemption at cafés',
        description: 'Scan the barista’s QR code to pay with Beans at participating cafés.',
      },
      {
        title: 'Activity & stats',
        description: 'Track gifts, coffees and top-ups, plus visits and cafés explored.',
      },
      {
        title: 'Simple onboarding',
        description: 'Sign up with a mobile number or email, with English and Arabic support.',
      },
    ],
    gallery: [
      { src: '/images/projects/etgahwa/screen-1.jpg', alt: 'Home screen with Beans balance, top up and redeem', orientation: 'portrait' },
      { src: '/images/projects/etgahwa/screen-2.jpg', alt: 'Onboarding: send coffee to anyone in seconds', orientation: 'portrait' },
      { src: '/images/projects/etgahwa/screen-3.jpg', alt: 'Profile with coffees received and sent', orientation: 'portrait' },
      { src: '/images/projects/etgahwa/screen-4.jpg', alt: 'Scan a QR code to redeem Beans', orientation: 'portrait' },
      { src: '/images/projects/etgahwa/screen-5.jpg', alt: 'Choose a Beans top-up package', orientation: 'portrait' },
      { src: '/images/projects/etgahwa/screen-6.jpg', alt: 'Wallet activity with gifts and coffees', orientation: 'portrait' },
    ],
    results: ['Launched on iOS and Android in October 2026'],
    links: {
      appStore: 'https://apps.apple.com/sa/app/etgahwa/id6809803732',
      playStore: 'https://play.google.com/store/apps/details?id=com.madarat.etgahwa',
      website: 'https://etgahwa.com/',
    },
    featured: false,
    published: true,
    order: 2,
  },
  {
    slug: 'my-sudani',
    title: 'My Sudani',
    subtitle: 'Sudani’s digital self-care app — balance, bundles, rewards and digital services with zero data cost.',
    summary:
      'The official self-care app for Sudani subscribers: track balance and usage, buy or build custom bundles, earn loyalty rewards and access digital services — at zero data cost.',
    category: 'Mobile Apps',
    industries: ['Telecom'],
    platforms: ['Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/my-sudani/icon.jpg',
    coverImage: '/images/projects/my-sudani/cover.jpg',
    coverAlt: 'My Sudani app screens: services, home usage dashboard and rewards',
    client: 'Sudani Telecommunication',
    overview:
      'My Sudani is the official digital self-care app from Sudani, one of Sudan’s mobile operators. It gives every subscriber full control of their telecom services — quickly, securely and without using any mobile data.\n\nThe app combines account management with engagement features: tailored bundles and a custom plan builder, a loyalty programme with daily rewards, referrals, caller tunes, and a marketplace of digital content spanning entertainment, education and games.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Balance & usage dashboard',
        description: 'Remaining data, voice and SMS, current balance, and active subscriptions at a glance.',
      },
      {
        title: 'Bundles & custom plans',
        description: 'Subscribe to smart offers or build your own plan by choosing data, minutes, SMS and validity.',
      },
      {
        title: 'Loyalty & rewards',
        description: 'Earn points and daily streaks, then redeem them for offers such as free data.',
      },
      {
        title: 'Recharge & payments',
        description: 'Add balance to any Sudani number with bank-linked payment methods.',
      },
      {
        title: 'Digital services & caller tunes',
        description: 'A marketplace of entertainment, education and games, plus personalised ringback tones.',
      },
      {
        title: 'Zero data cost & support',
        description: 'Use the app without consuming data, with feedback, complaints and support built in.',
      },
    ],
    gallery: [
      { src: '/images/projects/my-sudani/screen-1.jpg', alt: 'Home dashboard with remaining usage and balance', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-2.jpg', alt: 'Menu to manage numbers, profile and subscriptions', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-3.jpg', alt: 'Services and bundle subscriptions', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-4.jpg', alt: 'My Sudani — the first of its kind in Sudan', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-5.jpg', alt: 'Custom plan builder with data, minutes and SMS', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-6.jpg', alt: 'Add balance with a payment method', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-7.jpg', alt: 'Loyalty rewards and redeemable offers', orientation: 'portrait', frame: false },
      { src: '/images/projects/my-sudani/screen-8.jpg', alt: 'Contact us and proposed enhancements', orientation: 'portrait', frame: false },
    ],
    results: ['1M+ downloads on Google Play', '24K+ reviews on Google Play', 'Live on Android with regular updates'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.selfcare.link',
      website: 'https://sudani.sd/en/',
    },
    featured: false,
    published: true,
    order: 8,
  },
  {
    slug: 'bodyo',
    title: 'Bodyo',
    subtitle: 'Telehealth and wellness companion app for Bodyo’s check-up and teleconsultation kiosks.',
    summary:
      'Companion app for a health check-up and teleconsultation kiosk: session history, a personal health profile, connections with professionals and rewards that keep users engaged.',
    category: 'Mobile Apps',
    industries: ['Health'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/bodyo/icon.jpg',
    coverImage: '/images/projects/bodyo/cover.jpg',
    coverAlt: 'Bodyo app screens: session history, health profile and settings',
    client: 'Matrix SAS (Bodyo)',
    overview:
      'Bodyo builds health kiosks for check-ups and teleconsultations. The Bodyo app extends that experience to the user’s phone — a daily health and wellness companion linked to their kiosk sessions.\n\nUsers review their check-up history, keep a personal health profile, connect with health and wellness professionals and their community, and stay motivated through incentives and rewards on their journey to better health.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Kiosk-linked check-ups',
        description: 'Results from Bodyo health kiosk sessions are available in the app after each check-up.',
      },
      {
        title: 'Session history',
        description: 'A dated history of every check-up and teleconsultation session in one list.',
      },
      {
        title: 'Personal health profile',
        description: 'Weight, height, age and blood type in a customised profile that feeds into each session.',
      },
      {
        title: 'Telehealth & professionals',
        description: 'Connect with health and wellness professionals for guidance between kiosk visits.',
      },
      {
        title: 'Community & rewards',
        description: 'Incentives and rewards that keep users motivated on their wellness journey.',
      },
      {
        title: 'Preferences & dark mode',
        description: 'Account settings, units of measure, help and a dark mode for comfortable use.',
      },
    ],
    gallery: [
      { src: '/images/projects/bodyo/screen-1.jpg', alt: 'Bodyo — unleash the power of telehealth', orientation: 'portrait', frame: false },
      { src: '/images/projects/bodyo/screen-2.jpg', alt: 'Bodyo home screen', orientation: 'portrait', frame: false },
      { src: '/images/projects/bodyo/screen-3.jpg', alt: 'Session history of kiosk check-ups', orientation: 'portrait', frame: false },
      { src: '/images/projects/bodyo/screen-4.jpg', alt: 'Settings with preferences and dark mode', orientation: 'portrait', frame: false },
      { src: '/images/projects/bodyo/screen-5.jpg', alt: 'Customised health profile', orientation: 'portrait', frame: false },
    ],
    results: ['Live on iOS and Android since 2023'],
    links: {
      appStore: 'https://apps.apple.com/us/app/bodyo/id1643950621',
      playStore: 'https://play.google.com/store/apps/details?id=com.flutter.bodyo',
      website: 'https://bodyo.com/',
    },
    featured: false,
    published: true,
    order: 5,
  },
  {
    slug: 'mobily',
    title: 'Mobily',
    subtitle: 'The official app of Mobily — one of Saudi Arabia’s largest telecom operators — used by millions.',
    summary:
      'Telecom super-app for Mobily customers: manage every line, pay bills and recharge, subscribe to plans and add-ons, shop devices and redeem Neqaty rewards.',
    category: 'Mobile Apps',
    industries: ['Telecom', 'E-commerce'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/mobily/icon.jpg',
    coverImage: '/images/projects/mobily/cover.jpg',
    coverAlt: 'Mobily app screens: mobile plans, account dashboard and Neqaty rewards',
    client: 'Etihad Etisalat (Mobily)',
    overview:
      'The Mobily app puts all of a customer’s Mobily products and services in one place. It streamlines account management with a modern, clean interface and fast access to bills, balances and usage — for prepaid, postpaid and data customers alike.\n\nBeyond account management, it is a full commerce and loyalty platform: customers buy new lines, SIMs, eSIMs, fibre and the latest smartphones for delivery, subscribe to packages and add-ons in one tap, and earn and redeem Neqaty loyalty points with partner brands.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Plans & packages',
        description: 'Compare postpaid, prepaid and data plans and subscribe or unsubscribe with one tap.',
      },
      {
        title: 'Bills, usage & recharge',
        description: 'See bills, unbilled amounts and remaining data and minutes, then pay or recharge by card.',
      },
      {
        title: 'Shop on demand',
        description: 'Order the latest smartphones, new lines, SIMs, eSIMs and fibre for delivery.',
      },
      {
        title: 'All lines in one place',
        description: 'Manage every number under one account — subscriptions, credit limits and line services.',
      },
      {
        title: 'Neqaty rewards',
        description: 'Earn loyalty points and redeem them for voice, bills and partner offers.',
      },
      {
        title: 'Human support',
        description: 'Reach real support agents through social and in-app channels.',
      },
    ],
    gallery: [
      { src: '/images/projects/mobily/screen-1.jpg', alt: 'Everything Mobily, all in one place', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-2.jpg', alt: 'Mobily app splash on iPhone', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-3.jpg', alt: 'Mobile plans with postpaid, prepaid and data options', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-4.jpg', alt: 'Account dashboard with bill, data and minutes', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-5.jpg', alt: 'Shop the latest smartphones and services', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-6.jpg', alt: 'Line management and new line purchase', orientation: 'portrait', frame: false },
      { src: '/images/projects/mobily/screen-7.jpg', alt: 'Neqaty loyalty points and partner rewards', orientation: 'portrait', frame: false },
    ],
    results: [
      '10M+ downloads on Google Play',
      '4.8★ from 50,000+ ratings on the App Store',
      '284K+ reviews on Google Play',
      'Continuously updated with frequent releases',
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/mobily-%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84%D9%8A/id375539359',
      playStore: 'https://play.google.com/store/apps/details?id=com.mobily.activity',
      website: 'https://www.mobily.com.sa',
    },
    featured: true,
    published: true,
    order: 6,
  },
  {
    slug: 'preppace',
    title: 'PrepPace: Ace Your Interview',
    subtitle: 'A job-interview preparation app — question banks, mock interviews and expert tips in your pocket.',
    summary:
      'Interview-prep app with role-specific question banks, mock interviews with instant feedback, industry courses, study plans and offline access.',
    category: 'Mobile Apps',
    industries: ['Education'],
    platforms: ['Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/preppace/icon.jpg',
    coverImage: '/images/projects/preppace/cover.jpg',
    coverAlt: 'PrepPace app screens: courses, practice questions and mock answers',
    client: 'DigiOrbitz',
    overview:
      'PrepPace helps job seekers walk into interviews with confidence — whether they are freshers or experienced professionals. It brings together practice questions tailored to role and industry, expert tips on what employers look for, and realistic mock interviews.\n\nLearners follow topics and courses on the latest industry trends, take quizzes with explanations, track their progress with personalised study plans, and keep studying offline.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Role-specific question banks',
        description: 'Practice questions for freshers and experienced professionals across many industries.',
      },
      {
        title: 'Mock interviews & feedback',
        description: 'Rehearse realistic scenarios and get instant, actionable feedback on every answer.',
      },
      {
        title: 'Quizzes with explanations',
        description: 'Multiple-choice practice with right/wrong highlighting and a clear explanation for each answer.',
      },
      {
        title: 'Courses & industry trends',
        description: 'Topic-based courses and recent-quiz tracking from a personalised home screen.',
      },
      {
        title: 'Personalised study plans',
        description: 'Set goals, track progress and make sure every key topic is covered before the interview.',
      },
      {
        title: 'Offline access',
        description: 'Download questions and guides to keep preparing without an internet connection.',
      },
    ],
    gallery: [
      { src: '/images/projects/preppace/screen-1.jpg', alt: 'Welcome to PrepPace', orientation: 'portrait', frame: false },
      { src: '/images/projects/preppace/screen-2.jpg', alt: 'Learn with experts anytime, anywhere', orientation: 'portrait', frame: false },
      { src: '/images/projects/preppace/screen-3.jpg', alt: 'Home with topics, top courses and recent quizzes', orientation: 'portrait', frame: false },
      { src: '/images/projects/preppace/screen-4.jpg', alt: 'Mock interview questions and answers', orientation: 'portrait', frame: false },
      { src: '/images/projects/preppace/screen-5.jpg', alt: 'Practice question with answer explanation', orientation: 'portrait', frame: false },
    ],
    results: ['Published on Google Play'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.preppace.preppace.preppace',
    },
    featured: false,
    published: true,
    order: 12,
  },
  {
    slug: 'savvos-smartpay',
    title: 'Savvos SmartPay',
    subtitle: 'A health plan in your pocket — plan cards, virtual visits and paying for care in a few taps.',
    summary:
      'Health-plan app for Savvos members: digital plan and Rx cards, virtual and in-person doctor visits, card-based visit payments and support messaging.',
    category: 'Mobile Apps',
    industries: ['Health', 'Fintech'],
    platforms: ['iOS', 'Android'],
    // TODO: add the stack you used
    technologies: [],
    icon: '/images/projects/savvos-smartpay/icon.jpg',
    coverImage: '/images/projects/savvos-smartpay/cover.jpg',
    coverAlt: 'Savvos SmartPay app screens: start a visit, plan cards and paying for a visit',
    client: 'Savvos Health, Inc.',
    overview:
      'SmartPay puts a Savvos member’s health plan in the palm of their hand. Members can see their plan information, coverage and benefits at any time, get care from licensed providers through virtual visits, and pay for doctor visits with just a few taps.\n\nFor in-person care, members start a visit by choosing the type of care and clinic; funds are loaded to their benefit card for the visit, and they submit an overview and itemised receipt afterwards — with payment history and support always one tap away.',
    // TODO: describe your own contribution
    myRole: [],
    features: [
      {
        title: 'Plan & Rx ID cards',
        description: 'Digital health plan and prescription cards, with Add to Wallet and download options.',
      },
      {
        title: 'Virtual & in-person visits',
        description: 'Choose primary, urgent, specialist or mental-health care and start a visit in minutes.',
      },
      {
        title: 'Pay for a doctor visit',
        description: 'Funds are added to your benefit card for each visit, with the available balance shown up front.',
      },
      {
        title: 'Receipts & payment history',
        description: 'Submit visit overviews and itemised receipts, and track every payment in one place.',
      },
      {
        title: 'Coverage & benefits',
        description: 'View plan information, coverage details and benefits whenever you need them.',
      },
      {
        title: 'Support messaging',
        description: 'Message the Savvos support team directly from the app.',
      },
    ],
    gallery: [
      { src: '/images/projects/savvos-smartpay/screen-1.jpg', alt: 'Savvos SmartPay — the future of health plans', orientation: 'portrait', frame: false },
      { src: '/images/projects/savvos-smartpay/screen-2.jpg', alt: 'Choose a type of in-person visit', orientation: 'portrait', frame: false },
      { src: '/images/projects/savvos-smartpay/screen-3.jpg', alt: 'Start a doctor visit', orientation: 'portrait', frame: false },
      { src: '/images/projects/savvos-smartpay/screen-4.jpg', alt: 'Access plan and Rx ID cards', orientation: 'portrait', frame: false },
      { src: '/images/projects/savvos-smartpay/screen-5.jpg', alt: 'Pay for a doctor visit with the benefit card', orientation: 'portrait', frame: false },
      { src: '/images/projects/savvos-smartpay/screen-6.jpg', alt: 'Message the support team', orientation: 'portrait', frame: false },
    ],
    results: ['4.7★ rating on the App Store', 'Live on iOS and Android since 2025, with regular updates'],
    links: {
      appStore: 'https://apps.apple.com/us/app/savvos-smartpay/id6748625187',
      playStore: 'https://play.google.com/store/apps/details?id=com.savvos.smartpay',
      website: 'https://savvos.com',
    },
    featured: false,
    published: true,
    order: 13,
  },
];
