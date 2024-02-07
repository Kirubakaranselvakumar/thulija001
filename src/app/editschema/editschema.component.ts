import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editschema',
  templateUrl: './editschema.component.html',
  styleUrls: ['./editschema.component.css']
})
export class EditschemaComponent {

  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router,
    private routes : ActivatedRoute ) {

  }

  addForm3!: FormGroup;
  ngOnInit() : void{
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);
    console.log(routeParams['No']);


    this._customerService.getById3(routeParams['No']).subscribe((data : any) => {
      console.log(data);
      console.log(data.No);
      this.addForm3.patchValue(data);
    });

    this.addForm3 = this.formBuilder.group({
     No: [],
     Schemaa_name: ['',Validators.required],
     Description: ['',Validators.required]
  });

  }

  updateschema(){
    console.log(this.addForm3.value);
   this._customerService.updateCustomer3(this.addForm3.value).subscribe(() => {
     this.router.navigate(['schema']);
   });
 }

}
