import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './Gaurd/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'login',pathMatch:'full'
  // },
  {
    path:'',redirectTo:'employee',pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent,
  },
  {
    path:'employee',component:EmployeeComponent,children:[
    {path:'',component:EmplistingComponent},
    {path:'create',component:EmpaddComponent},
    {path:'Edit/:id',component:EmpaddComponent}
  ],canActivate:[AuthGuard]
  },
  // {
  //   path:'login',component:LoginComponent
  // },
  // {
  //   path:'register',component:RegisterComponent
  // },
  // {
  //   path:'forgot-password',component:ForgotPasswordComponent
  // },
  // {
  //   path:'verify-email',component:VerifyEmailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
