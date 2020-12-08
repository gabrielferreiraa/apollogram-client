export interface IUser {
  id: string;
  name: string;
  picture: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  user: IUser;
}
