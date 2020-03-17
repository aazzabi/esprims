import {User} from './User';

export  class Topic {
  _id: number;
  title: string;
  description: string;
  createdAt: Date;
  createdBy: User;
  createdById: number;
  categorie: string;
  comments: Comment[];

  public constructor(title: string, d: string, categorie: string, uid: number) {
    this.title = title;
    this.description = d;
    this.createdById = uid;
    this.categorie = categorie;
  }
}
