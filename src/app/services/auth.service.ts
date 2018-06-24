import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { JwtHelper } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  isAdmin = false;
  //jwtHelper: JwtHelper = new JwtHelper();
  currentUser = { _id: '', username: '', role: '' };
  constructor(private http: HttpClient,
              private router: Router) { 

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser['token']) {
      // const decodedUser = this.decodeUserFromToken(token);
      // this.setCurrentUser(decodedUser);
      this.loggedIn = true;
    }
  }

    

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:8081/api/adminLogin', { username: username, password: password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        window.location.reload();
        this.router.navigate(['/']);
    }

    // decodeUserFromToken(token) {
    //   return this.jwtHelper.decodeToken(token).user;
    // }

    setCurrentUser(decodedUser) {
      console.log('Inside setCurrentUser')
      this.loggedIn = true;
      this.currentUser._id = decodedUser._id;
      this.currentUser.username = decodedUser.username;
      this.currentUser.role = decodedUser.role;
      console.log('Auth Serivce',this);
      decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
      delete decodedUser.role;
    }

}
