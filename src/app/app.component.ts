import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  Billing:boolean=false;
  status:boolean=false;
  homepage:boolean=false;
sessionUser:any;
Settings:any;
constructor(private router: Router, private session:SessionService) { }


  ngOnInit(): void {
   console.log("sesion checking :" + this.session.getUserlogin())

    this.router.navigate(["./login"]);
    
  }


  statu( event:any){
    console.log("checkiung "+ event);
     this.sessionUser=event;
     this.Billing=false;
     this.status=false;
      this.homepage=true

  }

  homechecking(){

    console.log("sesion checking :" + this.session.getUserlogin())
    if(this.session.getUserlogin() === null || this.session.getUserlogin() === ""){
      this.router.navigate(["./login"]);
    }else{
      this.router.navigate(["/Home/",this.session.getUserName()]);
    }
  }
}
