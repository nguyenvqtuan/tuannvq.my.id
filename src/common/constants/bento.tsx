import { BentoItemProps } from '@/src/common/types/bento';

// Component references for icons and visuals
export const BENTO_ICONS = {
  projects: 'ProjectIcon',
  about: 'AboutIcon',
  stack: 'StackIcon',
  achievements: 'AchievementIcon',
  chat: 'ChatIcon',
  services: 'ServiceIcon',
} as const;

export const BENTO_VISUALS = {
  projects: 'AnimatedListProject',
  about: 'StackImagesPersonal',
  stack: 'MarqueeIcons',
  achievements: 'AchievementFolder',
  chat: 'ChatPreview',
  services: 'TrueFocusService',
} as const;

export const BENTO: BentoItemProps[] = [
  {
    title: 'Projects Showcase',
    description: 'A selection of real apps built to solve real problems.',
    label: 'Projects',
    icon: BENTO_ICONS.projects,
    visual: BENTO_VISUALS.projects,
    href: '/projects',
    colSpan: 2,
    className: 'from-pink-500 to-rose-500',
    isShow: true,
  },
  {
    title: 'About Me',
    description: 'Who I am and what I do.',
    label: 'About',
    icon: BENTO_ICONS.about,
    visual: BENTO_VISUALS.about,
    href: '/about',
    colSpan: 1,
    className: 'from-indigo-500 to-purple-500',
    isShow: true,
  },
  {
    title: 'Skills & Tools',
    description:
      'Covering Java, Spring Boot, Vue.js, React.js, and AWS cloud technologies.',
    label: 'Stack',
    icon: BENTO_ICONS.stack,
    visual: BENTO_VISUALS.stack,
    href: '/',
    colSpan: 1,
    className: 'from-emerald-400 to-green-600',
    isShow: true,
  },
  {
    title: 'Achievements',
    description: 'Milestones from programs, projects, and communities.',
    label: 'Achievements',
    icon: BENTO_ICONS.achievements,
    visual: BENTO_VISUALS.achievements,
    href: '/achievements',
    colSpan: 1,
    className: 'from-yellow-400 to-orange-500',
    isShow: true,
  },
  {
    title: 'Chat Room',
    description: 'Open space to talk and collaborate.',
    label: 'Chat',
    icon: BENTO_ICONS.chat,
    visual: BENTO_VISUALS.chat,
    href: '/chat',
    colSpan: 1,
    className: 'from-gray-700 to-gray-900',
    isShow: true,
  },
  {
    title: 'Services',
    description:
      'End-to-end solutions in web development, backend services, and cloud infrastructure.',
    label: 'Services',
    icon: BENTO_ICONS.services,
    visual: BENTO_VISUALS.services,
    href: '/',
    colSpan: 2,
    className: 'from-cyan-400 to-blue-600',
    isShow: true,
  },
];
