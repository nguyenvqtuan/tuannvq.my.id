import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import Dashboard from '@/src/modules/dashboard/components/Dashboard';
import { METADATA } from '@/src/common/constants/metadata';

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: `My activity dashboard as software engineer`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};

const DashboardPage = () => {
  const t = useTranslations('DashboardPage');

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t('title')} description={t('description')} />
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
