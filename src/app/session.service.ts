import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userlogin:any;
  userName:any;
  constructor() { }
   
  setUserName(userName:any){
    this.userName=userName;
  }

  getUserName(){
    return this.userName;
  }
  setUserLogin(login:string){
    this.userlogin=login;
  }

  getUserlogin(){
    return this.userlogin
  }

}
