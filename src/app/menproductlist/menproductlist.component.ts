import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menproductlist',
  templateUrl: './menproductlist.component.html',
  styleUrls: ['./menproductlist.component.css']
})
export class MenproductlistComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() menObject;

  ngOnInit(): void {
  
  }
  onSelectId(id){
    this.router.navigateByUrl('men/'+id)
  }

}
