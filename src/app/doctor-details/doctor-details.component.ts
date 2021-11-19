import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { doctor } from '../details/Product';
import { AdminservicesService } from '../service/adminservices.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  closeResult: string | undefined;

  constructor(private http:HttpClient, private _adminservices:AdminservicesService,private modalService: NgbModal) { }
  datas : doctor[]=[]
  fristName:string|undefined
  lastName:string|undefined
  age:string|undefined
  date:string|undefined
  email:string|undefined
  mobileNo:string|undefined
  address:string |undefined
  gener: any;
  qualification:any;
  ngOnInit(): void {
this._adminservices.getDoctorDetails().subscribe(
  data=> {
    this.datas=data
    console.log("doctor details"+ this.datas)
  }
)
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any):string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  save(){
   this.addDoctor()
   this.modalService.dismissAll()
  }

  addDoctor(){
    let url1="http://localhost:8080/addDoctor"
    this.http.post(url1,{
      email: this.email,
      gender: this.gener,
      age:this.age,
      city :this.address,
      qualification:this.qualification,
      mobileNo: this.mobileNo,
      date : this.date,
      firstName : this.fristName,
      lastName : this.lastName
     } ).subscribe(data => {
      console.log("suc  ",data);
     this.ngOnInit()
     },(error) => {
      console.log("err ",error);
      
     })
  }
}
