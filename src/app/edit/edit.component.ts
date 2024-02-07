import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomersService} from '../customers.service';
import { Customers } from '../customers';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router,
    private routes : ActivatedRoute ) {

  }

  addForm!: FormGroup;
  ngOnInit() : void{
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);
    console.log(routeParams['No']);


    this._customerService.getById(routeParams['No']).subscribe((data : any) => {
      console.log(data);
      console.log(data.No);
      this.addForm.patchValue(data);
    });

    this.addForm = this.formBuilder.group({
     No: [],
     Project_name: ['',Validators.required],
     Description: ['',Validators.required]
  });

  }

  update(){
    console.log(this.addForm.value);
   this._customerService.updateCustomer(this.addForm.value).subscribe(() => {
     this.router.navigate(['view']);
   });
 }
}
