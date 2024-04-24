import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { getCourseDetailType } from '@/types/course';

export default function HookGetCourseById(idCourse: string) {
  const { data, refetch } = useQuery({
    queryKey: ['/course/:idCourse'],
    queryFn: async () => {
      return api.get<ApiResponse<getCourseDetailType>>(
        `/course/${idCourse}/detail`,
      );
    },
  });
  return { data, refetch };
}
