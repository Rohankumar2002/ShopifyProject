import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessoriesproducts',
  templateUrl: './accessoriesproducts.component.html',
  styleUrls: ['./accessoriesproducts.component.css']
})
export class AccessoriesproductsComponent implements OnInit {

  mySubscription:any;
  Accessories;
  searchTerm:string;
  constructor(private fsObj:AccessoriesService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUserById().subscribe(
      accessData=>{
        this.Accessories=accessData;
      }
    )
  }
}
