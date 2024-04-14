import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@ecowise/token');
};

export const setToken = (token: string) => {
  cookies.set('@ecowise/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@ecowise/token', {
    path: '/',
  });
};
