import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LogserviceSvc {
   loginObj:any={
    Emailid:"",
    Password:""
  };

  apiurl:string= "http://localhost:5252/api/Auth/login"; 
  constructor(private http:HttpClient, private router:Router){  }

 onLoginService(obj: any): Observable<string | boolean> {
  return this.http.post<{ result: boolean; data: { token: string } }>(this.apiurl, obj).pipe(
    map(res => {
      if (res.result) {
        alert("Successful!!!");
        localStorage.setItem('loginToken', res.data.token);
        // optionally you can navigate here or in the component
        return true;
      } else {
        alert("Not successful login");
        return false;
      }
    }),
    catchError(() => {
      alert("Login failed due to network or server error");
      return of(false);
    })
  );
}

}
