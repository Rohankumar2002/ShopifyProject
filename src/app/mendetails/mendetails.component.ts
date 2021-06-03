import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {MenProducts} from '../model/model';

@Component({
  selector: 'app-mendetails',
  templateUrl: './mendetails.component.html',
  styleUrls: ['./mendetails.component.css']
})
export class MendetailsComponent implements OnInit {
  
 
  menObjects:MenProducts
  constructor(private ar:ActivatedRoute,private fs:DataService) { }

  ngOnInit(): void {
  
  
  let id=this.ar.snapshot.params.id;

  this.fs.getUserByIdWise(id).subscribe(
    obj=>{
      console.log("obj is",obj)
      this.menObjects=obj;
    },
    err=>{
      console.log("error is",err);
    }
    
  )
  
}
}
