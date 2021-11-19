import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { admin, reps } from '../details/Product';
import { AdminservicesService } from '../service/adminservices.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  datas: admin[] =[];

  selectedValue:string = "reps";
  password:string | undefined;
userName:string|undefined;
  constructor(private http:HttpClient, private _adminservices:AdminservicesService,private session:SessionService) { }

  ngOnInit(): void {

    console.log(" local storage : "+ this.session.getUserlogin() )
    this._adminservices.getLoginDetails().subscribe((data: any) =>{

      console.log(data)
      this.datas=data;
      console.log(  "updated "+ JSON.stringify(this.datas))
      })
  }

  onRowdeleteInit(data:any){
 
  }
  onRowEditInit(){

  }
  addAdmin(element:any , event:any){

    this.setup()

    element.hide(event)
  }

  setup(){
    let url1="http://localhost:8080/addUser"
    this.http.post(url1,{
      role:this.selectedValue,
      password:this.password,
      userName : this.userName
      
     } ).subscribe(data => {
      console.log("suc  ",data);
     this.ngOnInit()
     },(error) => {
      console.log("err ",error);
      
     })
    
  }  

}
