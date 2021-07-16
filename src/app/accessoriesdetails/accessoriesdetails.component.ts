import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessoriesService } from '../accessories.service';
import { MenProducts } from '../model/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accessoriesdetails',
  templateUrl: './accessoriesdetails.component.html',
  styleUrls: ['./accessoriesdetails.component.css']
})
export class AccessoriesdetailsComponent implements OnInit {

  accessObjects:MenProducts
  constructor(private ar:ActivatedRoute,private fs:AccessoriesService,private userService:UserService) { }

  ngOnInit(): void {
  
  
  let id=this.ar.snapshot.params.id;

  this.fs.getUserByIdWise(id).subscribe(
    obj=>{
      console.log("obj is",obj)
      this.accessObjects=obj;
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
