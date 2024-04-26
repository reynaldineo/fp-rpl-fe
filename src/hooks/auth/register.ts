import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { RegisterForm, RegisterResponse } from '@/types/auth/register';

export default function RegisterHook() {
  const router = useRouter();

  const { mutate: registerMutation, isPending } = useMutation<
    AxiosResponse,
    AxiosError,
    RegisterForm
  >({
    mutationFn: async (data: RegisterForm) => {
      const res = await api.post<ApiResponse<RegisterResponse>>(
        '/auth/register',
        data,
        {
          toastify: true,
        },
      );

      return res;
    },
    onSuccess: () => {
      router.push('/login');
    },
  });
  return { registerMutation, isPending };
}
