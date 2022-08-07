import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


const routes: Routes = [
  { path: 'Admin', component: AdminPanelComponent },
  { path:'Home/:id', component: HomepageComponent },
  { path:'login', component: LoginPageComponent },
  {path:'patient', component:PatientDetailsComponent},
  {path:'doctor' , component:DoctorDetailsComponent},{
   path:"any",component:DoctorDetailsComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
