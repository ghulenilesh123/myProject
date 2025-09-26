import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http :HttpClient){
          
  }

  setdata(data:any){

    return this.http.post("http://localhost:1000/emp",data)
  }
  getdata(){
    return this.http.get("http://localhost:1000/emp")
  }

  isLoggedIn = signal(false);

  login() {
    this.isLoggedIn.set(true);
  }

  logout() {
    this.isLoggedIn.set(false);
  }

  // Optional: expose read-only version to prevent direct set
  get loginState() {
    return this.isLoggedIn.asReadonly();
  }

  

}
