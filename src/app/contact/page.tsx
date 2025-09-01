import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import Contact from '@/src/modules/contact';
import { METADATA } from '@/src/common/constants/metadata';

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Contact ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

const ContactPage = () => {
  const t = useTranslations('ContactPage');

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t('title')} description={t('description')} />
      <Contact />
    </Container>
  );
};

export default ContactPage;
