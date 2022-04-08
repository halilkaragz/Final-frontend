import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/moduls/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //any her veri türü içerebileceyi anlamına gelir
  //süslü parantez obje olduğunu belirtir
  products: Product[] = [];
  dataLoaded = false;
  

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
   
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
        this.products=response.data; 
        this.dataLoaded = true
      });
  }
  

 
}
