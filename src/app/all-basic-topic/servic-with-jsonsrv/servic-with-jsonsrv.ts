import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceJson } from '../../all-service/service-json/service-json';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-servic-with-jsonsrv',
  standalone:true,
  imports: [RouterLink, RouterLinkActive,CommonModule,ReactiveFormsModule],
  templateUrl: './servic-with-jsonsrv.html',
  styleUrl: './servic-with-jsonsrv.css'
})
export class ServicWithJsonsrv {
    public listdata:any=[]
    public myform:any=[]
    public counter:number=1
  constructor(private jsonservice: ServiceJson,private fb : FormBuilder){
   this.myform= this.fb.group({
      Name:[""],
      Lname:[""],
      Email:[""],
      job:[""],
      gander:[""],
      Marks:[""],
   })
   this. getdata()
  }


  getdata(){
    this.jsonservice.getData().subscribe((res:any)=>{
      this. listdata=res
      console.log(this.listdata)
    })
  }

  postData(){
// ----------------------------------------------id-------

    //  console.log( this.myform.value)
    //  let id =this.counter++
    //  console.log(id)
    // this.myform.value.id = id.toString()
// -----------------------------------------------lastindex------
    // let lastindex =this.listdata.findLastIndex((item:any)=>item)
    // this.myform.value.id=(parseInt(lastindex)+2).toString()   // we can also use last index + 2
    // console.log(lastindex,"lastindex")
// -----------------------------------------------length------
      
    let length =this.listdata.length
    this.myform.value.id=(parseInt(length)+1).toString()   // we can also use length + 1
    console.log(length,"length")
// -----------------------------------------------lastid------
      
      //  this.myform.value.id=(parseInt(this.listdata[this.listdata.length-1].id)+1).toString() 
// -----------------------------------------------------

    this.jsonservice.postData(this.myform.value).subscribe((res:any)=>{
      console.log(res)
      this. getdata()
    })
  }
  select(data:any){
    this.myform.patchValue(data)
  }

  updatedata(){
    this.jsonservice.updatedata(this.myform.value).subscribe((res:any)=>{
      console.log(res)
      this. getdata()
    })
  }

  delete(data:any){
    this.jsonservice.delete(data).subscribe((rees:any)=>{
      console.log(rees)
      this.getdata()
    })
  }



}
