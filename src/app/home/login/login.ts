import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceJson } from '../../all-service/service-json/service-json';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public obj={
    email:'',
    password:'',
  }
constructor(private service :ServiceJson){


}

login2(){
  this.service.login(this.obj).subscribe((res)=>{
    console.log(res)
  })
}
   userlogin(){
    
    console.log(this.obj)
   }

   getdata(){
    this.service.get().subscribe((res)=>{
      console.log(res,"get")
    })
   }


}
