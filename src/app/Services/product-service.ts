import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:string= "http://localhost:5252/api/Products"; 
  constructor(private http:HttpClient, private router:Router){  }   
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }   
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${id}`);
    }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiurl, product);
  } 
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiurl}/${id}`, product);
  } 
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}/${id}`);
  }
}


    
