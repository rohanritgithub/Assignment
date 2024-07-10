import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormControl ,FormGroup ,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {
  designationdata:any;
  saveresponse:any;
  messageclass='';
  message='';
  Editdata:any;
  Employeeid:any;
  
  constructor(private service:EmployeeService,private route:ActivatedRoute , private router:Router) {
    this.Employeeid=this.route.snapshot.paramMap.get('id');
    if(this.Employeeid != null && this.Employeeid != 0){
      this.Updateemployee(this.Employeeid);
    }
    this.loadDegsination()
   }

   employeeForm=new FormGroup({
    id:new FormControl({value:'',disabled:true}),
    productName:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
   })

  loadDegsination(){
    this.service.Getdegsination().subscribe(result =>{
      this.designationdata=result
      console.log(this.designationdata)
    })
  }

  Saveemployee(){
    if(this.employeeForm.valid){
      //console.log(this.employeeForm.value)
      this.service.SaveEmployee(this.employeeForm.value).subscribe(result =>{
        console.log(result)
        this.saveresponse = result;
        if(this.saveresponse !== ''){
          alert("Save Successfully!")
          this.message="Save Successfully!"
          this.messageclass='success'
          this.router.navigate(['employee'])
        }else{
          this.message="Save failed"
          this.messageclass='error'
        }
      })
    }else{
      this.message="Please enter valid data"
          this.messageclass='error'
    }
  }

  goBack(){
    if(this.employeeForm.invalid){
      this.router.navigate(['employee'])
    }
  }

  Updateemployee(id:any){
    this.service.Employeebycode(id).subscribe(result =>{
      this.Editdata=result;
      if(this.Editdata != null){
        this.employeeForm=new FormGroup({
          id:new FormControl(this.Editdata.id),
          productName:new FormControl(this.Editdata.name),
          price:new FormControl(this.Editdata.email),
          category:new FormControl(this.Editdata.phone),
         })
      }
  });
  }


  get name(){
    return this.employeeForm.get('name')
  }
  get email(){
    return this.employeeForm.get('email')
  }
  get phone(){
    return this.employeeForm.get('phone')
  }
  get designation(){
    return this.employeeForm.get('designation')
  }

  ngOnInit(): void {
  }

}
