import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[]=[
    new Product(1,'第一个商品',1.99,3.5,'1-商品描述-1',['电子产品-1','软件-1']),
    new Product(2,'第二个商品',2.99,0.5,'2-商品描述-2',['电子产品-2','软件-2']),
    new Product(3,'第三个商品',3.99,1.5,'3-商品描述-3',['电子产品-3','软件-3']),
    new Product(4,'第四个商品',4.99,2.5,'4-商品描述-4',['电子产品-4','软件-4']),
    new Product(5,'第五个商品',5.99,4.5,'5-商品描述-5',['食品']),
    new Product(6,'第六个商品',6.99,5.0,'6-商品描述-6',['图书'])
  ];

  private productComment:Comment[]=[
    new Comment(111,1,'2017-6-8 22:58','summit1',3,'这是一个商品<1>评论内容..:)->...'),
    new Comment(112,1,'2017-6-8 22:59','summit2',4,'Hi,Boy!这是一个商品<1>评论内容2..:)->...'),
    new Comment(113,2,'2017-6-8 22:59','summit2',5,'这是一个商品<2>评论内容..:)->...'),
    new Comment(114,3,'2017-6-8 22:59','summit3',4,'这是一个商品<3>评论内容..:)->...'),
    new Comment(115,4,'2017-6-8 23:00','summit4',2,'这是一个商品<4>评论内容..:)->...'),
    new Comment(116,6,'2017-6-8 22:01','summit6',1,'这是一个商品<6>评论内容..:)->...'),
  ];
  constructor() { }

  getProducts():Product[]{
    return this.products;
  }

  getProduct(id:number):Product{
    return this.products.find(x=>x.id==id);
  }

  getComments(id:number):Comment[]{
    return this.productComment.filter(x=>x.productId==id);
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
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public createdOn:string,
    public user:string,
    public rating:number,
    public content:string
  ){

  }
}