import type { SkillGroup } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TECHNOLOGIES & SKILLS
 *  Groups with no items are hidden. Only list tools you're comfortable being
 *  hired for — there are deliberately no "skill percentage" bars.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const skills: SkillGroup[] = [
  {
    title: 'AI Development',
    icon: 'sparkles',
    items: ['LLM API Integration', 'AI Chatbots & Assistants', 'Prompt Engineering', 'Workflow Automation', 'AI in Mobile Apps', 'AI in Web Apps'],
  },
  {
    title: 'Mobile Development',
    icon: 'smartphone',
    items: ['Flutter', 'Dart', 'iOS', 'Android', 'Swift', 'Kotlin', 'Java'],
  },
  {
    title: 'Web & Backend',
    icon: 'globe',
    items: ['JavaScript', 'Node.js', 'Go', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Architecture & State',
    icon: 'layers',
    items: ['Clean Architecture', 'Riverpod', 'Bloc', 'GetX', 'SQLite'],
  },
  {
    title: 'APIs & Integrations',
    icon: 'puzzle',
    items: ['Push Notifications', 'Payment Integrations', 'Authentication', 'Real-time Chat', 'Third-party SDKs'],
  },
  {
    title: 'Development Tools',
    icon: 'git-branch',
    items: ['Git', 'GitHub', 'Xcode', 'Android Studio', 'VS Code'],
  },
];
