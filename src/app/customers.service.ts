import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  getCustomersById(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  getCustomers(){
    return this.http.get<Customers[]>('http://localhost/thulija/list.php');
  }

  createCustomer(customer : Customers) {
    return this.http.post<Customers[]>('http://localhost/thulija/insert.php', customer);
  }

  updateCustomer(customer : Customers){
    console.log(customer);
    return this.http.put('http://localhost/thulija/update.php' + '?No=' + customer.No, customer);
  }

  getById(No : any){
    console.log(No);
    return this.http.get<Customers[]>('http://localhost/thulija/getById.php?No=' + No);
  }

  deleteCustomer(No : any){
    console.log(No);
    return this.http.delete<Customers[]>('http://localhost/thulija/delete.php?No=' + No);
  }

  createCustomer2(customer : Customers) {
    return this.http.post<Customers[]>('http://localhost/thulija/insertempower.php', customer);
  }

  getCustomers2(){
    return this.http.get<Customers[]>('http://localhost/thulija/list2.php');
  }

  getById2(No : any){
    console.log(No);
    return this.http.get<Customers[]>('http://localhost/thulija/getById2.php?No=' + No);
  }

  updateCustomer2(customer : Customers){
    console.log(customer);
    return this.http.put('http://localhost/thulija/update2.php' + '?No=' + customer.No, customer);
  }

  deleteCustomer2(No : any){
    console.log(No);
    return this.http.delete<Customers[]>('http://localhost/thulija/delete2.php?No=' + No);
  }

  createCustomer3(customer : Customers) {
    return this.http.post<Customers[]>('http://localhost/thulija/insertschema.php', customer);
  }

  getCustomers3(){
    return this.http.get<Customers[]>('http://localhost/thulija/list3.php');
  }

  getById3(No : any){
    console.log(No);
    return this.http.get<Customers[]>('http://localhost/thulija/getById3.php?No=' + No);
  }

  updateCustomer3(customer : Customers){
    console.log(customer);
    return this.http.put('http://localhost/thulija/update3.php' + '?No=' + customer.No, customer);
  }

  deleteCustomer3(No : any){
    console.log(No);
    return this.http.delete<Customers[]>('http://localhost/thulija/delete3.php?No=' + No);
  }

}
