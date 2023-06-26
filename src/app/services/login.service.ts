import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  url="http://localhost:8080"
  //calling the server to generate the token
  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/token`,credentials)
  }

  
  //For login user
  loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }
  //Check if any user is logged in
  isLoggedIn(){
   let token=localStorage.getItem("token");
   if(token==undefined || token =='' || token==null){
     return false;
   }else{
     return true;
   }
  }
  //Logout the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }
  getToken(){
    return localStorage.getItem('token');
  }
  
}
