import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validations',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-validations.html',
  styleUrl: './reactive-validations.css'
})
export class ReactiveValidations {
public myForm: any;
  public listData: any = [];
  public conter: number = 1;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: [''],
      name: ['',[Validators.required,Validators.minLength(5)]],
      lname: ['',[Validators.required,Validators.maxLength(10)]],
      job: [''],
      gender: [''],
      Pass: [''],
    });
  }
  onSubmit() {
    this.myForm.value.id = this.conter++;
    this.listData.push({ ...this.myForm.value });
  }
  onEdit(data: any) {
    this.myForm.patchValue(data);
  }
  onDelete(data: any) {
    
    this.listData = this.listData.filter((item: any) => item.id !== data.id);
    console.log(this.listData);
  }

  onUpdate(form:any){
    let idx = this.listData.findIndex((ele:any)=>ele.id == form.value.id)
    console.log(idx)
    this.listData.splice(idx,1,form.value)
  }
}
