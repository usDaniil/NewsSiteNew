export interface News {
  id: string;
  header: string;
  user: {login: string, id: string};
  imagePath: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNews {
  header: string;
  userId: string;
  image: Blob;
  text: string;
}