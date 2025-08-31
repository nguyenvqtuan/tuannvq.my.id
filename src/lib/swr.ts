import { SWRConfig } from 'swr';

export const swrConfig = {
  fetcher: (url: string) => fetch(url).then(res => res.json()),
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 2000,
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};
