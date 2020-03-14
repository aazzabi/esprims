import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../../models/User';
import {StorageService} from '../security/storage.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'
  }),
  responseType: 'text' as 'text'
};

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  findUser = 'http://localhost:9080/prisma-crm-web/users/';

  GetLoggedUser(id: number) {
    return this.http.get<User>(this.findUser + 'findUser/' + id);
  }

  EditUser(users) {
    const body = JSON.stringify(users);
    return this.http.put(this.findUser + StorageService.get('currentUser').userId, body, httpOptions);
  }
  getAllUsers() {
    return this.http.get(this.findUser + 'All');
  }
  deleteUser(u: User ) {
    return this.http.delete(this.findUser + 'delete/' + u.id);
  }

}
