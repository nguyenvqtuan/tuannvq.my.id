import { Metadata } from 'next';

import Container from '@/src/common/components/elements/Container';
import Home from '@/src/modules/home';
import { METADATA } from '@/src/common/constants/metadata';

// Force dynamic rendering to resolve next-intl static generation issues
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
};

const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;
