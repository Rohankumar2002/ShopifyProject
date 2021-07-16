import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  userObj;
  constructor() { }

  ngOnInit(): void {
    //get user data from local storage
    this.userObj=JSON.parse(localStorage.getItem("userObj"));
  }

}
