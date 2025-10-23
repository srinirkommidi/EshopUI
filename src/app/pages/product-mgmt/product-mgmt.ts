import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export interface Product {
  id?: number;
  name?: string;
  price?: number;
}
@Component({
  selector: 'app-product-mgmt',
  templateUrl: './product-mgmt.html',
  styleUrls: ['./product-mgmt.css']
})
export class ProductMgmt {
  product: Product | undefined;
  products: Product[] = [];
  constructor(private http: HttpClient, private router: Router) {  }

  fetchProducts() {   
    this.http.get<Product[]>('http://localhost:5252/api/Products')
      .subscribe(data => {
        this.products = data;
      });}

postProduct() {
    const newProduct: Product = { name: 'New Product', price: 100 };
    this.http.post<Product>('http://localhost:5252/api/Products', newProduct)
      .subscribe(data => {
        this.products.push(data);
      });
    }
}
