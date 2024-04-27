import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';
import { ApiPaginatedResponse } from '@/types/api';
import { getShopType } from '@/types/shop';

export default function HookGetShop({
  page = 1,
  size = 10,
  search = '',
}: {
  page?: number;
  size?: number;
  search?: string;
}) {
  const { data, refetch } = useQuery({
    queryKey: ['/course'],
    queryFn: async () => {
      return await api.get<ApiPaginatedResponse<getShopType[]>>(
        `/store?page=${page}&size=${size}&search=${search}`,
      );
    },
  });
  return { data, refetch };
}
