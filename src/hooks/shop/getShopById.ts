import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { getShopDetailType } from '@/types/shop';

export default function HookGetShopById(idShop: string) {
  const { data, refetch } = useQuery({
    queryKey: ['/store/:idShop'],
    queryFn: async () => {
      return api.get<ApiResponse<getShopDetailType>>(`/store/${idShop}`);
    },
  });
  return { data, refetch };
}
