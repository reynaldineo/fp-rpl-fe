import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';
import { ApiPaginatedResponse } from '@/types/api';
import { getCourseType } from '@/types/course';

export default function HookGetCourse({
  page = 1,
  size = 9,
  search = '',
}: {
  page?: number;
  size?: number;
  search?: string;
}) {
  const { data, refetch } = useQuery({
    queryKey: ['/course'],
    queryFn: async () => {
      return await api.get<ApiPaginatedResponse<getCourseType[]>>(
        `/course?page=${page}&size=${size}&search=${search}`,
      );
    },
  });
  return { data, refetch };
}
