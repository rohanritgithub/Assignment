import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email:string='';
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  forgotpwd(){
    this.service.forgotpwd(this.email);
    this.email='';
  }
  

}
