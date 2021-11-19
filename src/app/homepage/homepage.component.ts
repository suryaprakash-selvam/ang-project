import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 admin:any;
 user :boolean=false;
  constructor(private router: Router,private route: ActivatedRoute,private session:SessionService) { 
    if(this.session.getUserlogin() === "admin"){
      this.user=true
    }
 this.admin="Admin Panel ";

  }
 
   
  ngOnInit(): void {

   

    console.log(this.user);
  }

  clicks(){
    if (this.user===true){
      this.router.navigate(["/Admin"]);
    }
 
  }

  patient(){
      this.router.navigate(["/patient"]);
    
 
  }


  doctor(){
    this.router.navigate(["/doctor"]);
  

}



}
