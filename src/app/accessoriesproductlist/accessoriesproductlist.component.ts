import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessoriesproductlist',
  templateUrl: './accessoriesproductlist.component.html',
  styleUrls: ['./accessoriesproductlist.component.css']
})
export class AccessoriesproductlistComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() accessObject;

  ngOnInit(): void {
  
  }
  onSelectId(id){
    this.router.navigateByUrl('access/'+id)
  }

}
