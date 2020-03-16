import {User} from './User';

export  class Topic {
  title: string;
  description: string;
  createdAt: Date;
  user: User;
  categorie: string;
  comments: Comment[];
}
