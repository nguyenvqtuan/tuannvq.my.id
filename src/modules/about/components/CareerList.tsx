'use client';

import { useTranslations } from 'next-intl';
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';

import SectionHeading from '@/src/common/components/elements/SectionHeading';
import SectionSubHeading from '@/src/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/src/common/constants/carreers';

import CareerCard from './CareerCard';

const CareerList = () => {
  const t = useTranslations('AboutPage.career');

  const filteredCareers = CAREERS?.filter(career => career.isShow);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t('title')} icon={<CareerIcon />} />
        <SectionSubHeading>
          <p>{t('sub_title')}</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredCareers?.map((career, index) => (
          <CareerCard key={index} indexCareer={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
