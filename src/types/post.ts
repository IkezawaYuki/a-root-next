export type Post = {
  id: number;
  customerId: number;
  instagramMediaId: string;
  instagramLink: string;
  wordpressLink?: string;
  wordpressMediaId?: string;
  createdAt: string;
};
