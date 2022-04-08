import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../moduls/listResponseModel';
import { Product } from '../moduls/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44379/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl + "Products/GetAll"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);      
  }
  
  getProductsbyCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl + "Products/getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);      
  }
}
