import { Component, OnInit } from '@angular/core';
import { Emp } from '../model/emp';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emplist: Emp[] = [];
  empobj : Emp = {
    id: '',
  firstname: '',
  lastname: '',
  email:  '',
  mobile: ''
  };
  id:string = '';
  firstname:string = '';
  lastname:string = '';
  email:string = '';
  mobile:string = '';

  constructor(private service:MasterService) { }

  ngOnInit(): void {
    this.getAllemp();
  }

   getAllemp(){
    this.service.getallemp().subscribe( res=>{
      
      //    this.emplist = res.map((e:any)=>{
      //    const data = e.payload.doc.data()
      //    data.id = e.payload.doc.id
      //    return 
      // })
    })
   }

  resetForm(){
    this.id = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.mobile= '';  
  }

  addemp(){
    if(this.firstname == '' || this.lastname == '' || this.mobile == '' || this.email == ''){
      alert('Please enter all fields')
      return
    }

    this.empobj.id='';
    this.empobj.firstname=this.firstname;
    this.empobj.lastname=this.lastname;
    this.empobj.email=this.email;
    this.empobj.mobile=this.mobile;

    this.service.addemp(this.empobj);
    this.resetForm();
  }

  updateEmp(){

  }

  deleteEmp(emp:Emp){
    if(window.confirm('Are you sure you want to delete?'+emp.firstname+''+emp.lastname+'?')){
      this.service.deleteemp(emp);
    }
      
  }
}
