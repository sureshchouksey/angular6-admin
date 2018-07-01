import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Device} from '../model/device';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','x-access-token':'eyJhbGciOiJIUzI1NiJ9.d29ya3BsYWNlT04.wY1KNDeJJqYKOQzF6KHsA-43k89vi86bX3gQckpbBfA' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,) { }
	//serverUrl:String = 'https://fcmprodserver.herokuapp.com';
	serverUrl:String = 'http://localhost:8081/api';
	//serverUrl:String = 'http://159.8.214.55';
  register(user:any): Observable<any> {       

        return this.http.post<any>(`${this.serverUrl}/user`, JSON.stringify(user), httpOptions).pipe(
	      tap((user:any) => console.log(`added user w/ id=${user.username}`)),
	      catchError(this.handleError<any>('addHero'))
	    );
    }

		getAllUsers():Observable<any[]>{

    	 return this.http.get<any[]>(`${this.serverUrl}/users`,httpOptions)
	      .pipe(
	        tap(users => console.log(`fetched heroes`)),
	        catchError(this.handleError('getAllUsers', []))
	      );
		}

		getUser(user):Observable<any[]>{

    	 return this.http.get<any[]>(`${this.serverUrl}/users/${user.username}`,httpOptions)
	      .pipe(
	        tap(users => console.log(`fetched heroes`)),
	        catchError(this.handleError('getAllUsers', []))
	      );
		}

		searchUser(searchUser):Observable<any[]>{
			 return this.http.post<any[]>(`${this.serverUrl}/user/search`,JSON.stringify(searchUser),httpOptions)
	      .pipe(
	        tap(devices => console.log(`search users`)),
	        catchError(this.handleError('searchUser', []))
	      );
		}

		editUser(user): Observable<any> {       

        return this.http.put<Device>(`${this.serverUrl}/user/${user._id}`, JSON.stringify(user), httpOptions).pipe(
	      tap((user:any) => console.log(`added hero w/ id=${user.username}`)),
	      catchError(this.handleError<Device>('addHero'))
	    );
    }

     /**
	   * Handle Http operation that failed.
	   * Let the app continue.
	   * @param operation - name of the operation that failed
	   * @param result - optional value to return as the observable result
	   */
	  private handleError<T> (operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {

	      // TODO: send the error to remote logging infrastructure
	      console.error(error); // log to console instead

	      // TODO: better job of transforming error for user consumption
	      console.log(`${operation} failed: ${error.message}`);

	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
	  }   
}
