import { Component } from '@angular/core';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Angular';
  data:any;
  constructor(private service:MasterService){}

  // Getempdata(data:any){
  //   this.service.getemployee().subscribe(result =>{
  //     this.data=result
  //     console.log(this.data)
  //   })
  // }

}
