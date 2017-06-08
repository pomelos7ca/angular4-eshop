import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() //这个值应该由父组件传递进来,注意需要import这个包
  private rating:number=0;
  public stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars=Array.from([1,2,3,4,5],v=>v>this.rating);
    /*
    教程里是用for来操作 这里用es6的方法简化了一下
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
    */
  }

}
