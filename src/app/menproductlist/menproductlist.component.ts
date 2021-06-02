import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-menproductlist',
  templateUrl: './menproductlist.component.html',
  styleUrls: ['./menproductlist.component.css']
})
export class MenproductlistComponent implements OnInit {

  constructor() { }
  @Input() menObject;

  ngOnInit(): void {
  
  }

}
