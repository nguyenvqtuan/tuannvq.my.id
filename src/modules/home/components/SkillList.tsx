import { BiCodeAlt as SkillsIcon } from 'react-icons/bi';
import { useTranslations } from 'next-intl';

import SectionHeading from '@/src/common/components/elements/SectionHeading';
import SectionSubHeading from '@/src/common/components/elements/SectionSubHeading';
import GlassIcon from '@/src/common/components/elements/GlassIcon';
import { STACKS } from '@/src/common/constants/stacks';

const SkillList = () => {
  const t = useTranslations('HomePage');

  const stacksInArray: Array<
    [string, { icon: React.ReactNode; background: string }]
  > = Object.entries(STACKS)
    .filter(([, value]) => value.isActive)
    .map(([name, value]) => [
      name,
      { icon: value.icon, background: value.background },
    ]);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t('skills.title')} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t('skills.sub_title')}</p>
        </SectionSubHeading>
      </div>

      <div className="grid w-full grid-cols-6 gap-x-[1em] gap-y-[2.7em] py-2 md:grid-cols-10 lg:grid-cols-11">
        {stacksInArray.map(([name, { icon, background }], index) => (
          <GlassIcon
            key={index}
            name={name}
            icon={icon}
            background={background}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillList;
