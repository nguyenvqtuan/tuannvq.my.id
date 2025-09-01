import { useTranslations } from 'next-intl';

import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import Achievements from '@/src/modules/achievements';

const AchievementsPage = () => {
  const t = useTranslations('AchievementsPage');

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t('title')} description={t('description')} />
      <Achievements />
    </Container>
  );
};

export default AchievementsPage;
