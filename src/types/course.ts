export type getCourseType = {
  id: string;
  url: string;
  img_cover: string;
  title: string;
  label: string | null;
  caption: string;
  like_count: number;
  account: {
    username: string;
  };
};

export type getCourseDetailType = {
  id: string;
  url: string;
  img_cover: string;
  title: string;
  caption: string;
  label: string | null;
  like_count: number;
  uploaded_at: string;
  account: {
    username: string;
  };
  comment: {
    account: {
      username: string;
    };
    comment: string;
  }[];
};


