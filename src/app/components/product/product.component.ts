import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/moduls/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //any her veri türü içerebileceyi anlamına gelir
  //süslü parantez obje olduğunu belirtir
  // product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5, unitsInStock: 10 };
  // product2 = { productId: 2, productName: 'Labtop', categoryId: 1, unitPrice: 5, unitsInStock: 10 };
  // product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5, unitsInStock: 10 };
  // product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5, unitsInStock: 10 };
  // product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5, unitsInStock: 10 };

  // products:Product[] = [
  //   this.product1, 
  //   this.product2, 
  //   this.product3, 
  //   this.product4, 
  //   this.product5
  // ];

     
  constructor() { }

  ngOnInit(): void {
  }

}
