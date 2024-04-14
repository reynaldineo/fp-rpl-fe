export type LoginForm = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  id: string;
  role: string;
  jwt: string;
}