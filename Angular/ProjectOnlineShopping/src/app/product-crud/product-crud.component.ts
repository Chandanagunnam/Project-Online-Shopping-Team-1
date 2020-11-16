import { Component, OnInit } from '@angular/core';
import {Products} from 'src/models/Products.model';
import {productservice} from 'src/services/productservice';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private prodservice:productservice) { }

  ngOnInit(){
    this.fetchProd();
  }
  //Get Method
  products;
  fetchProd()
  {
    this.prodservice.getProduct().subscribe((data)=>{
      this.products = data;
      console.log(data);
    })
  }
  //Post Method
  prod: any = {};
  result;
  addProduct() {
    console.log(this.prod);
    this.prodservice.insertProduct(this.prod).subscribe((data) => { this.result = data; })
    window.alert("Data Added!!!");
    //to see the changed data  without  reloading the page
    this.fetchProd();
  }

  ////Delete 
  removeProd(id) {
    this.prodservice.deleteProduct(id).subscribe((data)=>{this.result=data;})
    window.alert("Data Deleted!!!");
  }
//Fetching particular Product details
  getparticularProduct(id)
  {
   // debugger;
   this.prodservice.getProductbyid(id).subscribe((data)=>{ this.prod=data;})
 
  }
  updateparticularProd(Prod:Products)
  {
    console.log(Prod);
    this.prodservice.updateProduct(Prod).subscribe((data)=>{this.result=data;})
    window.alert("Record Updated!!!");
  }


}
