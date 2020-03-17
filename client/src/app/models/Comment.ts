import {Topic} from "./Topic";

export class Comment {

    public id: number;
    public topic: Topic;
    public topicId: number;
    public uid: number;
    public text: string;

  public constructor(text: string) {
    this.text = text;
  }
}
