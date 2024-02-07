import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add2',
  templateUrl: './add2.component.html',
  styleUrls: ['./add2.component.css']
})
export class Add2Component {

  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router
    ) {

}

addForm2!: FormGroup;
  ngOnInit() : void{
    this.addForm2 = this.formBuilder.group({
      
      Module_name: ['',Validators.required],
      Description: ['',Validators.required],
      
    });
  }

  onSubmit() {
    console.log(this.addForm2.value);
   this._customerService.createCustomer2(this.addForm2.value)
   .subscribe (_data => {
     this.router.navigate(['empower']);
   })
 }

}
