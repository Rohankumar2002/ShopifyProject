import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from '../kids.service';
import { MenProducts } from '../model/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kidsdetails',
  templateUrl: './kidsdetails.component.html',
  styleUrls: ['./kidsdetails.component.css']
})
export class KidsdetailsComponent implements OnInit {

  kidObjects:MenProducts;
  constructor(private ar:ActivatedRoute,private fs:KidsService,private userService:UserService) { }

  ngOnInit(): void {
  
  
  let id=this.ar.snapshot.params.id;

  this.fs.getUserByIdWise(id).subscribe(
    obj=>{
      console.log("obj is",obj)
      this.kidObjects=obj;
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