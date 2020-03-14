import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export  class  AuthIntercepter implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('currentUser');
    if (idToken) {
      const objJson = JSON.parse(idToken);
      const token = objJson.data['token'];

      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return  next.handle(cloned);

      } else {
        return next.handle(req);
      }
    }

  }

}
