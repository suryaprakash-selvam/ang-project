import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { reps } from '../details/Product';
import { AdminservicesService } from '../service/adminservices.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-resp-details',
  templateUrl: './resp-details.component.html',
  styleUrls: ['./resp-details.component.css']
})
export class RespDetailsComponent implements OnInit {
  datas: reps[] =[];


  MobileNo:string |undefined;
  date:string|undefined;
  FirstName:string|undefined;
  LastName:string|undefined;

  constructor(private http:HttpClient, private _adminservices:AdminservicesService,private session:SessionService) { }

  ngOnInit(): void {
    this._adminservices.getRespList().subscribe((data: any) =>{

      console.log(data)
      this.datas=data;
      console.log(  "updated "+ JSON.stringify(this.datas))
      })

      
     
  }


  onRowdeleteInit(data:any){
 
  }
  onRowEditInit(){
    
  }
  addReps(element:any, event:Event){

   this.repsadd()
    element.hide(event)
  }

  repsadd(){
    let url1="http://localhost:8080/addreps"
    this.http.post(url1,{
      mobileNo:this.MobileNo,
      FirstName: this.FirstName,
      lastName: this.LastName,
      date:this.date
      
     } ).subscribe(data => {
      console.log("suc  ",data);
     this.ngOnInit()
     },(error) => {
      console.log("err ",error);
      
     })
    
  }
}
