import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserServices {

    constructor(public http: HttpClient) { }

    public auth(email, password): Observable<User> {
        console.log(JSON.stringify(email, password))
        const myData ={email, password}
        return this.http.post<User>("http://127.0.0.1:5000/api/auth" , myData)
    }

 

}
