import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmpaddComponent } from './empadd/empadd.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './register/register.component'
import { environment } from 'src/environments/environment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent,
    EmplistingComponent,
    EmpaddComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, NgbModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),FormsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
