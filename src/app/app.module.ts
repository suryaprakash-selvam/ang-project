import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import { RespDetailsComponent } from './resp-details/resp-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FilterproductPipe } from './filterproduct.pipe';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import { AnyComponetComponent } from './any-componet/any-componet.component'; 

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    LoginPageComponent,
    HomepageComponent,
    AdminPanelComponent,
    RespDetailsComponent,
    PatientDetailsComponent,
    DoctorDetailsComponent,
    FilterproductPipe,
    AnyComponetComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    TableModule,
    CommonModule,
    ToastModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    FontAwesomeModule,
    HttpClientModule,
    CardModule,
    PanelModule,
    NgbModule,
    ButtonModule,
    OverlayPanelModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
