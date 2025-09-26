import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceJson {

  constructor(private http :HttpClient){
   
  }


   getData(){
    return  this.http.get("http://localhost:3000/jsondata")
   }

   postData(data:any){
     return this.http.post('http://localhost:3000/jsondata',data)
   }

   updatedata(data:any){
    return this.http.put(`http://localhost:3000/jsondata/${data.id}`,data)
   }


   delete(data:any){
    return this.http.delete(`http://localhost:3000/jsondata/${data.id}`)
   }

  // ===============================jwt token ==================

  login(data:any){
   return  this.http.post('http://localhost:3000/login',data)
  }

  get (){
    return this.http.get('http://localhost:3000/login')
  }
}
