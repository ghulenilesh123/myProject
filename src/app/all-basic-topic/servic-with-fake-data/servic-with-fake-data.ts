import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Dummyservice } from '../../all-service/demo-service/dummyservice';
import { LoginService } from '../../all-service/loginservice/login-service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-servic-with-fake-data',
  standalone:true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './servic-with-fake-data.html',
  styleUrl: './servic-with-fake-data.css'
})
export class ServicWithFakeData {
  // public listData: any = []
  // public myform: any = []
  // public counter: number = 1
  // public postedData: any = []

  // constructor(private dummyservice: Dummyservice, private fb: FormBuilder) {
  //   this.getData()
  //   this.getData()
  //   this.myform = this.fb.group({
  //     id: [''],
  //     name: [''],
  //     lname: [''],
  //     email: [''],
  //     job: [''],
  //     gander: [''],
  //     password: [''],
  //   })

  // }

  // getData() {
  //   this.dummyservice.getData().subscribe((res: any) => {
  //     console.log("get responce", res)
  //     this.listData = res
  //   })
  // }
  // postData() {
  //   this.myform.value.id = this.counter++
  //   // console.log(this.myform.value)
  //   this.dummyservice.postData1({ ...this.myform.value }).subscribe((res: any) => {
  //     this.postedData.push(res)
  //     this.getData()
  //     console.log("send responce",res)
  //   })

  // }
  // onEdit(data: any) {
  //   this.myform.patchValue(data)
  // }

  // updatedata(form: any) {
  //   this.dummyservice.updateDta(this.myform.value).subscribe((res: any) => {
  //     //table data
  //     let idx = this.postedData.findIndex((el: any) => el.id == form.value.id)
  //     this.postedData.splice(idx, 1, form.value)
  //     this.getData()
  //     console.log("update responce",res)
  //   })
  // }


  //  delete(data:any){
  //   this.dummyservice.delete(data).subscribe((res:any)=>{
  //     this.postedData=this.postedData.filter((el:any)=>el.id!==data.id)
  //     console.log("delete responce",res)
      
  //   })
  //  }
  //  ++++++++++++++++++++++++++++

  public listData :any=[]
  public listData1 :any=[]
  public counter :number=1
  public myform :any
  constructor(private service :Dummyservice, private fb : FormBuilder){
  //  this.  getData()
   this.myform= this.fb .group({
     id:[""],
     title:[""],
     body:[""],
     
   })
  }
  getData(){
    this.service.get().subscribe((res:any)=>{
        this.listData=res
        console.log("listdata",this.listData)
        // this.  getData()
    })
  }

  onEdit(data: any) {
    this.myform.patchValue(data)
  }
  postdata(){
    
    this.service.post(this.myform.value).subscribe((res:any)=>{
      this.listData1.push(res)
      console.log("post response " , res )
      console.log("post response2 " , this.listData1 )
      this.  getData()
    })
  }

  onDelete() {
    this.service.Delete(this.myform.value).subscribe((res: any) => {
      console.log("delete response ", res);
      this.getData();
    })};

  onupdate(data: any) {
  this.service.update(this.myform.value).subscribe((res: any) => {
    console.log("update response ", res);
    this.getData();
  });
}
  
}
