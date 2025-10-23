import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../Models/user-details';
@Injectable({
  providedIn: 'root'
})
export class RegistrationSvc {

  usr!: UserDetails;
  apiurl: string = 'http://localhost:5252/api/Auth/register';
  constructor(private http: HttpClient) { }

  registerUser(userDetails: UserDetails): Observable<any> {
    this.usr = userDetails;
    return this.http.post<any>(this.apiurl, this.usr);
  }
}
