import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/stores/useAuthStore';
import { ApiResponse } from '@/types/api';
import { LoginForm, LoginResponse } from '@/types/auth/login';
import { User } from '@/types/user';

export default function LoginHook() {
  const router = useRouter();
  const { login } = useAuthStore();

  const { mutate: loginMutation, isPending } = useMutation<
    AxiosResponse,
    AxiosError,
    LoginForm
  >({
    mutationFn: async (data: LoginForm) => {
      const res = await api.post<ApiResponse<LoginResponse>>(
        '/auth/login',
        data,
        {
          toastify: true,
        },
      );

      const { jwt } = res.data.data;
      setToken(jwt);

      const userData = await api.get<ApiResponse<User>>('/user/details');
      if (userData) login({ ...userData.data.data, jwt });

      return res;
    },
    onSuccess: () => {
      router.push('/');
    },
  });
  return { loginMutation, isPending };
}
