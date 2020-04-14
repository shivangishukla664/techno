import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

powers = ['Smart Coder', 'Super Flexible',
'Logical Thinker', 'Excellent Analyst'];
model = new Employee(18,'', '', '');
submitted = false;



constructor() {
  
 }
 
onSubmit() { 
  this.submitted = true;
}

 ngOnInit(){
  }

}
