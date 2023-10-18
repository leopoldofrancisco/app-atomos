import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private http: HttpClient ) { }

  
  /*showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  } */
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  } 

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable <Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e)));
  }


  errorHandler(e: any): Observable<any> {
    console.log(e);
    //this.showMessage("Ocerror um erro!", true);
    return EMPTY
  }
}
