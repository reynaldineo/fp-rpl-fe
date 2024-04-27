export type getShopType = {
  id: string;
  img_url: string;
  name: string;
  price: number;
  account: {
    username: string;
  };
};

export type getShopDetailType = {
  id: string;
  img_url: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  account_id: string;
  course_id?: string;
  account: {
    username: string;
  };
};
