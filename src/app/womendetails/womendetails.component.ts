import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WomenService } from '../women.service';
import { MenProducts } from '../model/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-womendetails',
  templateUrl: './womendetails.component.html',
  styleUrls: ['./womendetails.component.css']
})
export class WomendetailsComponent implements OnInit {

  womenObjects:MenProducts
  constructor(private ar:ActivatedRoute,private fs:WomenService,private userService:UserService) { }

  ngOnInit(): void {
  
  
  let id=this.ar.snapshot.params.id;

  this.fs.getUserByIdWise(id).subscribe(
    obj=>{
      console.log("obj is",obj)
      this.womenObjects=obj;
    },
    err=>{
      console.log("error is",err);
    }
    
  )
  
}
onProductSelect(productObject) {
   
  let username=localStorage.getItem("email")

  let newUserProductObj={username,productObject}

 this.userService.sendProductToUserCart(newUserProductObj).subscribe(
   res=>{
     alert(res['message'])
     this.userService.updateDataObservable(res.latestCartObj)
   },
   err=>{
     console.log("err in posting product to cart ",err)
     alert("Something wrong in adding product to cart...")
   }
 )

}

}
