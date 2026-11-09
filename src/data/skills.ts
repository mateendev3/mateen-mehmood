import type { SkillGroup } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TECHNOLOGIES & SKILLS
 *  Groups with no items are hidden. Only list tools you're comfortable being
 *  hired for — there are deliberately no "skill percentage" bars.
 *  Names that match src/components/ui/TechLogo.tsx get a brand logo automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const skills: SkillGroup[] = [
  {
    title: 'AI Development',
    icon: 'sparkles',
    items: [
      'LLM API Integration',
      'AI Chatbots & Assistants',
      'RAG & Knowledge Bases',
      'Prompt Engineering',
      'Workflow Automation',
      'Python',
      'LangChain',
    ],
  },
  {
    title: 'Mobile Development',
    icon: 'smartphone',
    items: ['Flutter', 'Dart', 'React Native', 'Swift', 'iOS', 'Kotlin', 'Android', 'Java'],
  },
  {
    title: 'Frontend',
    icon: 'globe',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    icon: 'layers',
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'Go', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST & GraphQL'],
  },
  {
    title: 'Architecture & Integrations',
    icon: 'puzzle',
    items: [
      'Clean Architecture',
      'Riverpod',
      'Bloc',
      'GetX',
      'Push Notifications',
      'Payments',
      'Authentication',
      'Real-time Chat',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'git-branch',
    items: ['Git', 'GitHub', 'Docker', 'Xcode', 'Android Studio', 'Postman', 'VS Code'],
  },
];
