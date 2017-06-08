import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "app/shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products:Array<Product>;
  public imgUrl:string="http://placehold.it/320x150";
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
