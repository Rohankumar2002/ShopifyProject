import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from '../kids.service';

@Component({
  selector: 'app-kidsproducts',
  templateUrl: './kidsproducts.component.html',
  styleUrls: ['./kidsproducts.component.css']
})
export class KidsproductsComponent implements OnInit {

  
  mySubscription:any;
  KidsProducts;
  searchTerm:string;

  constructor(private fsObj:KidsService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUserById().subscribe(
      kidData=>{
        this.KidsProducts=kidData;
      }
    )
  }

}
