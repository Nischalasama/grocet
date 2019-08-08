import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
    
  items = [];
  itemToPublish : Subject<any>;
  productToBeAdded: Subject<any>;
  isUserLogged: boolean;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
    this.productToBeAdded = new Subject();
    this.itemToPublish = new Subject();
  }
  setUserLoggedIn() {
    this.isUserLogged = true;
  }

  setUserLoggedOut() {
    this.isUserLogged = false;
  }

  getUserLogged() {
    return this.isUserLogged;
  }

  getAllCustomers() {
    return this.httpClient.get('RestAPIrangers/webapi/myresource/getcustomers').pipe(retry(10));
  }
  getAllOrders() {
    return this.httpClient.get('RestAPIrangers/webapi/myresource/getOrders').pipe(retry(10));
  }


  registerEmp(customer: any) {
    console.log('Inside service...', ' ', customer);
    return this.httpClient.post('RestAPIrangers/webapi/myresource/registerEmp', customer);
  }

  addToCart(product) {
    this.productToBeAdded.next(product);
  }

  getToCart() {
    return this.productToBeAdded.asObservable();
  }

  setCart(item1:any){
    this.items = item1;
  }

  getCart(){
    return this.items;
  }

  
  getEmpByUserPass(c_email: string, password: string): any {
    console.log('Inside service:' , c_email, password);
    return this.httpClient.get('RestAPIrangers/webapi/myresource/getCustomerByUserPass/' + c_email + '/' + password).toPromise();
    }

    postFile(ImageForm: any, fileToUpload: File) {
      const endpoint = 'RestAPIrangers/webapi/myresource/uploadImage';
      const formData: FormData = new FormData();
      formData.append('Image', fileToUpload, fileToUpload.name);
      formData.append('productName', ImageForm.productName);
      formData.append('description', ImageForm.description);
      formData.append('price', ImageForm.price);
      return this.httpClient.post(endpoint, formData);
    }

    getProducts() {
      return this.httpClient.get('RestAPIrangers/webapi/myresource/getProducts').pipe(retry(10));
     }

}
