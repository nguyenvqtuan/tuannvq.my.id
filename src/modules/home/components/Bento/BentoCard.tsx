'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  BiUser as AboutIcon,
  BiCollection as ProjectIcon,
  BiCategory as DashboardIcon,
  BiBook as ContactIcon,
} from 'react-icons/bi';
import { PiChatTeardropDotsBold as ChatIcon } from 'react-icons/pi';
import { PiCertificate as AchievementIcon } from 'react-icons/pi';

import SpotlightCard from '@/src/common/components/elements/SpotlightCard';
import { BentoItemProps } from '@/src/common/types/bento';

// Dynamic imports for visual components
const AnimatedListProject = dynamic(() => import('./AnimatedListProject'), {
  ssr: false,
});
const StackImagesPersonal = dynamic(() => import('./StackImagesPersonal'), {
  ssr: false,
});
const MarqueeIcons = dynamic(() => import('./MarqueeIcons'), { ssr: false });
const AchievementFolder = dynamic(() => import('./AchievementFolder'), {
  ssr: false,
});
const ChatPreview = dynamic(() => import('./ChatPreview'), { ssr: false });
const TrueFocusService = dynamic(() => import('./TrueFocusService'), {
  ssr: false,
});

// Icon mapping
const iconMap = {
  ProjectIcon: <ProjectIcon size={22} />,
  AboutIcon: <AboutIcon size={22} />,
  StackIcon: <DashboardIcon size={22} />,
  AchievementIcon: <AchievementIcon size={22} />,
  ChatIcon: <ChatIcon size={22} />,
  ServiceIcon: <ContactIcon size={22} />,
};

// Visual mapping
const visualMap = {
  AnimatedListProject: <AnimatedListProject />,
  StackImagesPersonal: <StackImagesPersonal />,
  MarqueeIcons: <MarqueeIcons />,
  AchievementFolder: <AchievementFolder />,
  ChatPreview: <ChatPreview />,
  TrueFocusService: <TrueFocusService />,
};

const BentoCard = ({
  title,
  description,
  label,
  icon,
  visual,
  href,
  colSpan,
  className,
}: BentoItemProps) => {
  // Resolve icon and visual from string references
  const resolvedIcon =
    typeof icon === 'string' ? iconMap[icon as keyof typeof iconMap] : icon;
  const resolvedVisual =
    typeof visual === 'string'
      ? visualMap[visual as keyof typeof visualMap]
      : visual;

  return (
    <SpotlightCard
      className={`!p-0 md:col-span-${colSpan ?? 1}  ${colSpan === 2 ? 'grid grid-cols-2 gap-2' : 'flex flex-col'} ${className}`}
    >
      <div
        className={`flex flex-col p-6 ${colSpan === 2 ? 'item-start' : 'items-center text-center'}`}
      >
        {resolvedIcon && href && (
          <Link
            href={href}
            className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
          >
            {resolvedIcon}
          </Link>
        )}
        <h2 className="mb-1 mt-3 text-sm font-medium text-neutral-800 dark:text-neutral-300">
          {title}
        </h2>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      {resolvedVisual && <>{resolvedVisual}</>}
    </SpotlightCard>
  );
};

export default BentoCard;
