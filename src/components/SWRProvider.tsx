'use client';

import { SWRConfig } from 'swr';
import { swrConfig } from '@/src/lib/swr';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
};
