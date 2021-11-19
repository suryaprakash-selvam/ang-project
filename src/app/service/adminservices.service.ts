import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {

  constructor(private http:HttpClient){}

  getRespList(): Observable<any> {
    return this.http.get("http://localhost:8080/resp");
}
  getLoginDetails(): Observable<any>{
    return this.http.get("http://localhost:8080/getLogin");
  }

  getlogin(uname:string , pwd:string ): Observable<any>{
    return this.http.get("http://localhost:8080/login?id="+ uname +"&pwd="+ pwd);
  }

  getPatientDetails(): Observable<any>{
    return this.http.get("http://localhost:8080/getPatient");
  }

  getDoctorDetails(): Observable<any>{
    return this.http.get("http://localhost:8080/getDoctorDetails");
  }

  getDoctorAvlDetails(): Observable<any>{
    return this.http.get("http://localhost:8080/getDoctorAval");
  }
   

  setfinalReportDetails(name:any ,reason:any ): Observable<any>{
    return this.http.get("http://localhost:8080/updatePatient/"+name+"/"+reason);
  }

}
