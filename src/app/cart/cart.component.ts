import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

userObj;
count;
userCartObj;
  products=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
 //get user data from local storage
 this.userObj= JSON.parse(localStorage.getItem("userObj"))
 //get userCartObj from API
 this.userService.getProductsFromUserCart(this.userObj.username).subscribe(
   res=>{
     if(res.message==='Cart-empty'){
       this.userService.updateDataObservable(0)
     }
     else{
       this.userService.updateDataObservable(res.message)
     }
     this.userService.dataObservable.subscribe(prodObj=>{
        if(prodObj==0){
           this.count=0;
        }
        else{
          this.count=prodObj.products.length;
        }
     })
   }
 )



 //get user data from local storage
 this.userObj= JSON.parse(localStorage.getItem("userObj"))
let username=localStorage.getItem("email")
this.userService.getProductsFromUserCart(username).subscribe(
  res=>{

   
    if(res["message"]==='Cart-empty'){
    
      alert("User cart is empty")
    }
    else{

      this.userCartObj=res["message"]
     // console.log(this.userCartObj)
      
      
        
      
      
      
        
      
    }
  },
  err=>{
    console.log("err in reading cart",err)
    alert("Something went wrong in fetching cart items..")
  }
)
}



  

}





