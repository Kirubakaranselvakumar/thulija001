import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-editempower',
  templateUrl: './editempower.component.html',
  styleUrls: ['./editempower.component.css']
})
export class EditempowerComponent {

  constructor (private formBuilder: FormBuilder,
    private _customerService : CustomersService,
    private router : Router,
    private routes : ActivatedRoute ) {

  }

  addForm2!: FormGroup;
  ngOnInit() : void{
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams);
    console.log(routeParams['No']);


    this._customerService.getById2(routeParams['No']).subscribe((data : any) => {
      console.log(data);
      console.log(data.No);
      this.addForm2.patchValue(data);
    });

    this.addForm2 = this.formBuilder.group({
     No: [],
     Module_name: ['',Validators.required],
     Description: ['',Validators.required]
  });

  }

  updateempower(){
    console.log(this.addForm2.value);
   this._customerService.updateCustomer2(this.addForm2.value).subscribe(() => {
     this.router.navigate(['empower']);
   });
 }

}
