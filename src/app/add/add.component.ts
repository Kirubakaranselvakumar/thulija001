import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomersService} from '../customers.service';
import { Customers } from '../customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router
    ) {

}

addForm!: FormGroup;
  ngOnInit() : void{
    this.addForm = this.formBuilder.group({
      
      Project_name: ['',Validators.required],
      Description: ['',Validators.required],
      
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
   this._customerService.createCustomer(this.addForm.value)
   .subscribe (_data => {
     this.router.navigate(['view']);
   })
 }


}
