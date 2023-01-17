import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../interfaces/user-interface';
import {HttpClient} from "@angular/common/http";
import { handleError } from '../handleError';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){}
  
  registerUser(user: User): Observable<User> {
    return this.http.post<User>("/register", user)
      .pipe(catchError(handleError));
      
  }
}
