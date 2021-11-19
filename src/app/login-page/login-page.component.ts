import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { admin } from '../details/Product';
import { AdminservicesService } from '../service/adminservices.service';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService]
})
export class LoginPageComponent implements OnInit {


  userName:any;
  password:any;

  login: admin | undefined ;

  role :any;
  constructor(private router: Router ,private messageService: MessageService, private session:SessionService , private http:HttpClient, private _adminservices:AdminservicesService) { }
  @Output()
   status = new EventEmitter<string>();

  ngOnInit(): void {
  }

 onLogin() {


this._adminservices.getlogin(this.userName,this.password).subscribe(data => {
  this.login=data;
  console.log("login checking role "+ JSON.stringify(this.login))
  console.log("login checking role "+ this.login?.role)
  this.role=this.login?.role;
  this.session.setUserLogin(this.role);
  this.session.setUserName(this.userName);
  if(this.login?.role != "noaccess"){
    this.router.navigate(["/Home/",this.userName]);
  }else {
    this.ngOnInit()
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Invaid User'});
    this.userName=""
    this.password=""
  }
})

  
}

}
