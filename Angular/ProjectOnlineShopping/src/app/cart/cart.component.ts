import { Component, OnInit } from '@angular/core';
import {Products} from 'src/models/Products.model';
import {productservice} from 'src/services/productservice';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:Products[];
  grandTotal:number;

  constructor(private proservice:productservice) { 
    this.products = this.proservice.cart;
  }

  ngDoCheck():void{
    this.grandTotal=0;
    this.products.forEach(element=>{
      this.grandTotal+=element.ProductPrice*element.Quantity; 
      } );
      }
removeItem(prod:Products)
    {
      console.log("in removeiten in cart",prod);
      this.proservice.removeItemfromCartservice(prod);
    }

  

  ngOnInit() {
  }

}
