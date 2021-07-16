import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womenproductlist',
  templateUrl: './womenproductlist.component.html',
  styleUrls: ['./womenproductlist.component.css']
})
export class WomenproductlistComponent implements OnInit {

  
  constructor(private router:Router) { }
  @Input() womenObject;

  ngOnInit(): void {
  
  }
   onSelectId(id){
     this.router.navigateByUrl('women/'+id)
   }

}
