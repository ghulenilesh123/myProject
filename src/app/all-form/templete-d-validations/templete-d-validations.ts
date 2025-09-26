import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templete-d-validations',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './templete-d-validations.html',
  styleUrl: './templete-d-validations.css'
})
export class TempleteDValidations {
public listdata: any = []
  public counter: number = 1

  public formdata: any = {
    id: "",
    name: "",
    lname: "",
    Gendar: "",
    Email: "",
    Password: "",

  }
  item: any;

  constructor() {
     console.log(this.formdata)
  }
  onSubmit() {
    this.formdata.id = this.counter++
    this.listdata.push({ ...this.formdata })
    console.log(this.listdata);
  }
  onEdit(data: any) {
    this.formdata = { ...data }
  }
  onDelete(data:any){
    this.listdata = this.listdata.filter((item:any)=>item.id !== data.id)
  }

  onUpdate(form:any){
    let idx = this.listdata.findIndex((item:any)=> item.id === form.value.id)
    
    this.listdata .splice(idx,1,form.value)
  }
}
