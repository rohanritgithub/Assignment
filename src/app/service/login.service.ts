import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //loginapiurl = 'http://localhost:3000/logincre';
  constructor(private fireauth: AngularFireAuth,private router:Router) {}

  //login auth
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);

        if(res.user?.emailVerified == true){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/verify-email'])
        }

      },(err) => {
        alert('Something went wrong..');
        this.router.navigate(['/login']);
      }
    );
  }

  //register method

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      res => {
        alert('Register as successful');
        this.router.navigate(['/login']);
        this.sendEmailForVarification(res.user)
      },
      (err) => {
        alert('Register Wrong');
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Signout Wrong');
      }
    );
  }

  forgotpwd(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
    },err =>{
      alert('Not send email something went wrong')
    } )
  }

  //email verifiaction method
  sendEmailForVarification(user:any){
    user.sendEmailForVarification().then( (res:any)=>{
      this.router.navigate(['/verify-email'])
    },(err:any)=>{
      alert('Something went wrong. Not able to send mail to registred email.')
    } )
  }

  googlesignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
    },err=>{
      alert('Falid to sign In')
    })
  }

  //   procedlogin(logincre:any){
  //     return this.http.post(this.loginapiurl,logincre)
  //   }

  //   islogedin(){
  //     return localStorage.getItem("token")!=null;
  //   }

  //   Gettoken(){
  // return localStorage.getItem("token") || '';
  //   }
}
