import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { docavl, doctor, patient, Timevalue } from '../details/Product';
import { AdminservicesService } from '../service/adminservices.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {


  datas: patient[]=[];
  closeResult: string | undefined;

  firstname:string | undefined
  lastname:string |undefined
  age:string|undefined
  doa:string|undefined
  email:string|undefined
  moblieno:string|undefined
  address:string|undefined
  gener: any;
  date: any;
  selectdoctor:any
  displayBasic:boolean=false
  selected: any;
  doctor : doctor[]=[]
  selectedTime:any;
  time: Timevalue[]=[];
  docav:docavl[]=[]
  appointment:boolean=true
  displaybasic2:boolean=false
  FinalReportOption:Timevalue[]=[]
  finalReport?:string;
  selectedpatient:string | undefined 


  constructor(private http:HttpClient, private _adminservices:AdminservicesService,private modalService: NgbModal) { 

    this.time=[
      {label:'11am',value: '11am'	},
      {label:'12pm',	value:	'12pm'	},
      {label:'	1pm',	value: '1pm'},
 {label:'2pm',	value:'2pm'},
 {label:'3pm',	value:'3pm'},
 {label:'4pm',	value:'4pm'},
 {label:'5pm',	value:'5pm'	},
 {label:'6pm',	value:'6pm'	},
 {label:'7Pm',	value:'7pm'	},
 {label:'8pm',	value:'8pm'	}
    ]
    this.FinalReportOption=[
      {label:'Diagnosis',	value:'Diagnosis'	},
      {label:'medication',	value:'medication'	}
    ]
  }


  ngOnInit(): void {

    this._adminservices.getPatientDetails().subscribe(data => {
      
      console.log("patient :" + data)
      this.datas=data
      console.log("patien log "+ JSON.stringify(this.datas))
    }

    )

    this._adminservices.getDoctorDetails().subscribe(
      data=> 
      {
        this.doctor=data
      }
    )

    this._adminservices.getDoctorAvlDetails().subscribe(
      data =>{
        this.docav=data
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
  
  showBasicDialog(selected :any, secound:any){

    this.selected=selected

    console.log(selected +" chekcingbd"+ secound)
   if(secound==null && selected!= null){
    console.log(selected)
    this.displayBasic=true
   }
  }


  showBasicDialog2(selected :any){
    this.selectedpatient=selected;
console.log(selected)
    this.displaybasic2=true
  }

  click(element:any){

    console.log("this advise :" + JSON.stringify(this.doa))
     this.patient()
   this.modalService.dismissAll()
  }

  final(){
    this._adminservices.setfinalReportDetails(this.selectedpatient,this.finalReport).subscribe(
      data => 
    {
      console.log(data)
      this.displaybasic2=false
      this.ngOnInit()
    }
    )
  }


patient(){
  let url1="http://localhost:8080/addpatient"
  this.http.post(url1,{
    email: this.email,
    gender: this.gener,
    address: this.address,
    age: this.age,
    date:  this.doa,
    firstName: this.firstname,
    lastName: this.lastname,
    mobileNo: this.moblieno
   } ).subscribe(data => {
    console.log("suc  ",data);
   this.ngOnInit()
   },(error) => {
    console.log("err ",error);
    
   })
  
 }

saveAppointment(){
  let url1="http://localhost:8080/setDoctorAval"
  this.http.post(url1,{
    docName: this.selectdoctor,
    patientName: this.selected,
    time: this.selectedTime
   } ).subscribe(data => {
    console.log("suc  ",data);
   this.ngOnInit()
   this.displayBasic=false
   

  },(error) => {
    console.log("err ",error);
    
   })
}

}
