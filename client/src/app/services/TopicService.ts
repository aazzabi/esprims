import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Topic} from '../models/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(public http: HttpClient) {
  }
  public getAll(): Observable<Topic[]> {
    console.log("service topic ")
    return this.http.get<Topic[]>('http://127.0.0.1:5000/api/topic');
  }
  public getById(idTopic): Observable<Comment> {
    return this.http.get<Comment>('http://127.0.0.1:5000/api/topic/' + idTopic );
  }

  public addTopic(topic): Observable<Topic> {
    return this.http.post<Topic>('http://127.0.0.1:5000/api/topic/addCommentToTopic/', topic);
  }
  public addCommentToTopic(idTopic, idUser, comment): Observable<Topic> {
    // console.log(idTopic);
    // console.log(idUser);
    // console.log(comment);
    return this.http.post<Topic>('http://127.0.0.1:5000/api/topic/addCommentToTopic/' + idTopic + '/' + idUser, comment);
  }
  public commentsByTopicId(idTopic): Observable<Comment> {
    return this.http.get<Comment>('http://127.0.0.1:5000/api/topic/commentsByTopicId/' + idTopic );
  }
  public deleteComment(id): Observable<Comment> {
    return this.http.delete<Comment>('http://127.0.0.1:5000/api/topic/deleteComment/' + id);
  }


}
