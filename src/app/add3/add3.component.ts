import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add3',
  templateUrl: './add3.component.html',
  styleUrls: ['./add3.component.css']
})
export class Add3Component {

  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router
    ) {

}

addForm3!: FormGroup;
  ngOnInit() : void{
    this.addForm3 = this.formBuilder.group({
      
      Schemaa_name: ['',Validators.required],
      Description: ['',Validators.required],
      
    });
  }

  onSubmit() {
    console.log(this.addForm3.value);
   this._customerService.createCustomer3(this.addForm3.value)
   .subscribe (_data => {
     this.router.navigate(['schema']);
   })
 }

}
