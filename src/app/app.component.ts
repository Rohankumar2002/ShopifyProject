
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { SearchpipePipe } from './searchpipe.pipe';
import {UserService} from './user.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'FirstProject';
  //inject userservice object
  constructor(public fs:DataService,public us:UserService,private router:Router){}
  searchTerm:string;


  onSignUp(userObj){
    this.us.createUser(userObj).subscribe(
      res=>{
        if(res.message==="New user created"){
          alert("User created")
          //navigate to Login component
          this.router.navigateByUrl("/login")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("something went wrong in user creation")
      }
    )
  }

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }




  userObj;
  count: number;
  userCartObj;
  products=[];
  
  ngOnInit(): void {
 //get user data from local storage
 this.userObj= JSON.parse(localStorage.getItem("userObj"))
 //get userCartObj from API
 this.us.getProductsFromUserCart(this.userObj.username).subscribe(
   res=>{
     if(res.message==='Cart-empty'){
       this.us.updateDataObservable(0)
     }
     else{
       this.us.updateDataObservable(res.message)
     }
     this.us.dataObservable.subscribe(prodObj=>{
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
this.us.getProductsFromUserCart(username).subscribe(
  res=>{

   
    if(res["message"]==='Cart-empty'){
    
      alert("User watchlist is empty")
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

