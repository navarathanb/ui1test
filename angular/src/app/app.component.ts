import { Component } from '@angular/core';

import {productService} from './products.service';
import {Products} from './products';


@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: `app/app.component.html`,
  styles: ['h2{color: red; font-size: 40px;}'],
  styleUrls: ['./app.component.css'],
  providers: [productService]

})
export class AppComponent  { 
  name:string = 'James'; 
  mobile: number = 90329832;
  data: string = "Host crystal-clear meetings with up to 250 attendees.Take your meetings on the go with industry-leading mobile apps. Calendar plugins mean you can schedule & join a meeting in seconds. Productivity…boosted with unlimited cloud recording & meeting transcription.";
  emps: any[] = [{'id':100,'name':'james', 'email':'james@gmail.com', 'mobile':2343242, 'img':'app/img/1.jpg'},{'id':101,'name':'vimal', 'email':'vimal@gmail.com', 'mobile':34253232, 'img':'app/img/2.jpg'},{'id':102,'name':'suresh', 'email':'suresh@gmail.com', 'mobile':3243243242, 'img':'app/img/3.jpg'},{'id':103,'name':'kumar', 'email':'kumar@gmail.com', 'mobile':243242, 'img':'app/img/4.jpg'},{'id':104,'name':'patrick', 'email':'patrick@gmail.com', 'mobile':23432423, 'img':'app/img/5.jpg'}];
  result:boolean = true;
  image: string = "app/img/1.jpg";
  products:Products[];
  addCart:any[] = [];

  constructor(private prosService:productService){}
  ngOnInit():any {
    this.prosService.getProductsData().subscribe( response => this.products = response);
    return this.products;
  }

  cart(pname: string, cost: string, img:string, id:number) {
    this.addCart.push({"pname":pname, "cost":cost, "img":img, "id":id});
  }

  delete(pid:number) {
    for(let i=0; i<this.addCart.length;i++) {
      if(this.addCart[i].id === pid) {
        this.addCart.splice(i,1);
      }
    }
  }

}
