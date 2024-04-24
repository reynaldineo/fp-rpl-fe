import 'axios';

import { AxiosError } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    toastify?: boolean;
    loadingMessage?: string;
  }
}

export type ApiResponse<T = undefined> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiPaginatedResponse<T = undefined> = {
  success: boolean;
  message: string;
  data: T;
  pageNumber: number;
  pageSize: number;
  maxPage: number;
};

export type ApiError = AxiosError<{
  message: string;
}>;

export type DefaultMeta = {
  max_page: number;
  page: number;
};

export type PaginatedData<TData, KMeta extends DefaultMeta = DefaultMeta> = {
  data_per_page: TData[];
  meta: KMeta;
};

export const defaultPaginatedData = {
  data_per_page: [],
  meta: {
    max_page: 1,
    page: 1,
  },
};

export type PaginatedApiResponse<
  TData = undefined,
  KMeta extends DefaultMeta = DefaultMeta,
> = {
  status: string;
  message: string;
  data: PaginatedData<TData, KMeta>;
};
