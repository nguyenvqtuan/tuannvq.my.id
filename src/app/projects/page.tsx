import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import Projects from '@/src/modules/projects';
import { METADATA } from '@/src/common/constants/metadata';

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: 'Software Engineer portfolio ideas',
  keywords: 'portfolio frontend developer',
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

const ProjectsPage = () => {
  const t = useTranslations('ProjectsPage');

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t('title')} description={t('description')} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
