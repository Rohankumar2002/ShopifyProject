import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WomenService } from '../women.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent implements OnInit {

  
  mySubscription:any;
  WomenProducts;
  searchTerm:string;

  constructor(private fsObj:WomenService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUserById().subscribe(
      womenData=>{
        this.WomenProducts=womenData;
      }
    )
  }

}
