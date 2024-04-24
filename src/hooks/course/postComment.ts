import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '@/lib/api';

export default function HookPostComment(courseId: string) {
  const { mutateAsync: commentMutation, isPending } = useMutation<
    AxiosResponse,
    AxiosError,
    { comment: string }
  >({
    mutationFn: async (data: { comment: string }) => {
      return api.post(`/course/${courseId}/addComment`, data, {
        toastify: true,
      });
    },
  });
  return { commentMutation, isPending };
}
