import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Emp } from '../model/emp';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient,private afs:AngularFirestore) { }
  //apiurl='http://localhost:3000/employee';

  // getemployee(){
  //   //console.log(this.apiurl)
  //   return this.http.get(this.apiurl)
  // }

  //add emp
  addemp(emp:Emp){
    emp.id = this.afs.createId()
    return this.afs.collection('/Emps').add(emp);
  }

  //get all emp
  getallemp(){
    return this.afs.collection('/Emps').snapshotChanges();
  }

  //delete emp
  deleteemp(emp : Emp){
    return this.afs.doc('/Emps/'+emp.id).delete()
  }

  //update emp
  updateEmp(emp:Emp){
    this.deleteemp(emp);
    this.addemp(emp);

  }


}
