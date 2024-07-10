import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
// import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css'],
})
export class EmplistingComponent implements OnInit {
  employeedata: any;
  deletedData:any;

  constructor(private service: EmployeeService ) {
    this.loadall();
  }

  loadall() {
    this.service.Getempdata().subscribe((result:any) => {
      this.employeedata = result;
    });
  }

  delete(id: any) {
    if (confirm('Do you want remove?')) {
      this.service.RemoveEmployeebycode(id).subscribe((result:any) => {
        this.deletedData=result
        confirm('Deleted Successfully!')
        this.loadall();
      });
    }
  }



  ngOnInit(): void {}
}
