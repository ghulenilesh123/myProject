import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dummyservice {
  //   GET    https://dummyjson.com/products
  // GET    https://dummyjson.com/users
  // POST   https://dummyjson.com/auth/login
  //        Body: { username: 'kminchelle', password: '0lelplR' }


  constructor(private http: HttpClient) {


  }
  // private header = new HttpHeaders(
  //   { "x-api-key": "reqres-free-v1" }
  // )
  // // get
  // getData() {
  //   return this.http.get(" https://reqres.in/api/users?page=2", { headers: this.header })
  // }

  // //post
  // postData1(data: any) {
  //   return this.http.post('https://reqres.in/api/users?page=2,', data, { headers: this.header })
  // }

  // //update
  // // updateDta(formvalue: any) {
  // //   return this.http.put('https://reqres.in/api/users/2,', formvalue, { headers: this.header })
  // // }

  // updateDta(form: any) {
  //   return this.http.put('https://reqres.in/api/users/2', form, { headers: this.header })

  // }

  // delete(data:any) {
  //   return this.http.delete(`https://reqres.in/api/users/2 ${data.id}`, { headers: this.header })

  // }

// ===================================================================
  get(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  post(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
  }

  Delete(data: any) {
    // data should have id
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`);
  }
  update(data: any) {
    // data should have id
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data);
  }


}
