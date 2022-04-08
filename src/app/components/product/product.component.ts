import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
// ActivatedRoute Angular da BuildIn bir servisi, aktifleştirilmiş route yani mevcut route
  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"])
      {
        this.getProductsByCategory(params["categoryId"])
      }
      else{this.getProducts()}
    })
   
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
        this.products=response.data; 
        this.dataLoaded = true
      });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsbyCategory(categoryId).subscribe(response=>{
        this.products=response.data; 
        this.dataLoaded = true
      });
  }
  

 
}
