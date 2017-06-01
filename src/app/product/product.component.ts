import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 暴露给外部调用的属性
  public products:Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,'第一个商品',1.99,3.5,'1-商品描述-1',['电子产品-1','软件-1']),
      new Product(2,'第二个商品',2.99,0.5,'2-商品描述-2',['电子产品-2','软件-2']),
      new Product(3,'第三个商品',3.99,1.5,'3-商品描述-3',['电子产品-3','软件-3']),
      new Product(4,'第四个商品',4.99,2.5,'4-商品描述-4',['电子产品-4','软件-4']),
      new Product(5,'第五个商品',5.99,4.5,'5-商品描述-5',['食品']),
      new Product(6,'第六个商品',6.99,5.5,'6-商品描述-6',['图书'])
    ];
  }

}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){
  }
}