import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.css']
})
export class MenProductsComponent implements OnInit {
  mySubscription:any;
  MenProducts;

  constructor(private fsObj:DataService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUserById().subscribe(
      menData=>{
        this.MenProducts=menData;
      }
    )
  }
 
}
