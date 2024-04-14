export type User = {
  id: string;
  email: string;
  username: string;
  role: string;
  createdAt: string;
  bio: string;
};

export type WithToken = {
  jwt: string;
};
