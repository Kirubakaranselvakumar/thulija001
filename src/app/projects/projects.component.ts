import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { Customers } from '../customers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  customers!: Customers[];
  _No: any;

  constructor(private _customersService : CustomersService, 
    private router: Router) {}

    ngOnInit(): void {
    
      this._customersService.getCustomers()
      .subscribe((data : Customers[]) => {
        this.customers = data;
        console.log(this.customers);
      });
    }


  



    edit(customers: Customers){
      this._No = customers.No;
      this.router.navigate(['edit/' + this._No]);
    
    }

    delete(customers: Customers): void{
      console.log(customers.No);
      this._customersService.deleteCustomer(customers.No)
      .subscribe(_data => {
        this.customers =this.customers.filter(u => u !== customers);
        // console.log(_data);
      });
    }

}
