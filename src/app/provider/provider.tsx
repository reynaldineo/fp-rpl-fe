'use client';

import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { Toaster } from 'sonner';

import api from '@/lib/api';

export default function Provider({ children }: { children: React.ReactNode }) {
  const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
    return await api.get(`${queryKey?.[0]}`);
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster richColors closeButton position='top-center' />
    </QueryClientProvider>
  );
}
