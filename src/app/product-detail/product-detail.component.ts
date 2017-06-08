import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,Comment,ProductService } from "app/shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Comment[];
  constructor(private router:ActivatedRoute,
  private productService:ProductService) { }

  ngOnInit() {
    let productId=this.router.snapshot.params["id"];
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getComments(productId);
  }

}
