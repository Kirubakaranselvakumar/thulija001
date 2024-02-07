import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit{
  customers!: Customers[];
  _No: any;

  constructor(private _customersService : CustomersService, 
    private router: Router) {}

    ngOnInit(): void {
    
      this._customersService.getCustomers3()
      .subscribe((data : Customers[]) => {
        this.customers = data;
        console.log(this.customers);
      });
    }

  edit(customers: Customers){
    this._No = customers.No;
    this.router.navigate(['editschema/' + this._No]);
  
  }

  delete(customers: Customers): void{
    console.log(customers.No);
    this._customersService.deleteCustomer3(customers.No)
    .subscribe(_data => {
      this.customers =this.customers.filter(u => u !== customers);
      // console.log(_data);
    });
  }

}
