import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kidsproductlist',
  templateUrl: './kidsproductlist.component.html',
  styleUrls: ['./kidsproductlist.component.css']
})
export class KidsproductlistComponent implements OnInit {


  constructor(private router:Router) { }
  @Input() kidObject;

  ngOnInit(): void {
  
  }
   onSelectId(id){
     this.router.navigateByUrl('kids/'+id)
   }


}
