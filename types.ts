// types.ts
export interface ProfileImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface CommentAttributes {
  username: string;
  profileimage: ProfileImage;
  comments: string;
  publishedAt: string;
}

export interface CommentData {
  id: number;
  attributes: CommentAttributes;
}

export interface PostAttributes {
  username: string;
  profileimage: ProfileImage;
  tweetimage: ProfileImage;
  emailaddress: string;
  publishedtime: string;
  publishedAt: string;
  description: string;
  comments: {
    data: CommentData[];
  };
}

export interface PostData {
  id: number;
  attributes: PostAttributes;
}
