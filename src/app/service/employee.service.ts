import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apidegsinationurl='http://localhost:3000/degisation';
  apiurlemployee='http://localhost:3000/employee';
  constructor(private http:HttpClient) { }

  Getdegsination(){
    return this.http.get(this.apidegsinationurl)
  }

  Getempdata(){
    return this.http.get(this.apiurlemployee)
  }

  Employeebycode(id:any){
    return this.http.get(this.apiurlemployee+'/'+id);
  }

  RemoveEmployeebycode(id:any){
    return this.http.delete(this.apiurlemployee+'/'+id);
  }

  SaveEmployee(inputdata:any){
    return this.http.post(this.apiurlemployee,inputdata);
  }

}
