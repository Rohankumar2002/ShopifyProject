import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  //inject userservice object
  constructor(private router:Router,private us:UserService) {}

  ngOnInit(): void {
  }

  onLogin(userCredentials){
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="login success"){
             //save token to local storage
             localStorage.setItem("token",res.token)
             localStorage.setItem("email",res.email)
             localStorage.setItem("userObj",JSON.stringify(res.userObj))
             //update userlogin status
             this.us.userLoginStatus=true;
             //navigate to user profile
            
             if(this.us.userLoginStatus===true){
             this.router.navigateByUrl('/home')
             }

        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("something went wrong in user login")
      }
    )
  }

}
