import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Form submitted");
    if((this.credentials.username !='' && this.credentials.password !='')&&
     (this.credentials.username !='' && this.credentials.password !='')){
      console.log("We have to submit the form");
      //token generate
      this.login.generateToken(this.credentials).subscribe(
        (response:any)=>{
            console.log(response.token);
            //Login the user: Localstorage mein data chala jayega
            this.login.loginUser(response.token);
            window.location.href="/dashboard";
        },
        error=>{
            console.log(error);
        }
      )
     }else{
       console.log("Fields are empty");
     }
  }

}
