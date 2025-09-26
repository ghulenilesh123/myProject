import { CommonModule } from '@angular/common';
import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, ],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
public myForm: any;
  public listData: any = [];
  public conter: number = 1;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: [''],
      name: [''],
      lname: [''],
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


  searchText = '';
  
  users = [
    { name: "nilesh", lname: "ghule", marks: 22 },
    { name: "rahul", lname: "shinde", marks: 23 },
    { name: "shekhar", lname: "kadham", marks: 24 },
    { name: "sagar", lname: "ghulee", marks: 25 }
  ];

  users2: string[] = [
    'Nilesh',
    'Sanjay',
    'Rahul',
    'Sneha',
    'Priya',
    'Amit'
  ];
  }

  // ========pipe1 for obj filter====
// @Pipe({
//     name: 'filter',
//     standalone: true
//   })
//   export class FilterPipe implements PipeTransform {
//     transform(items: any[], searchText: string): any[] {
//       if (!items) return [];
//       if (!searchText) return items;
      
//       searchText = searchText.toLowerCase();
      
//       return items.filter(item => {
//         return Object.values(item).some(val =>
//           String(val).toLowerCase().includes(searchText)
//         );
//       });
//   }
// }
// ==================pipe2 for arrayfilter====
// @Pipe({
//   name: 'filter2',
//   standalone: true
// })
// export class FilterPipe2 implements PipeTransform {
//   transform(items: string[], searchText: string): string[] {
//     if (!items) return [];
//     if (!searchText) return items;

//     searchText = searchText.toLowerCase();
//     return items.filter(item => item.toLowerCase().includes(searchText));
//   }
// }




// with api fitler

// name = 'Angular ' + VERSION.major;
//   public src :any=''
//   public searchres :any
//   constructor(private http :HttpClient){
//     this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
//     this.myData =res
//     console.log(this.myData)

//    })

//   }
  
  
//   public res :any=[]
  
//   public myData:any=[]
  
 
//   test(){
  
     
//    this. searchres =this. src.toLowerCase();
//     this.res = this.myData.filter(item => {
//       return Object.values(item).some(val =>
//         val.toString().toLowerCase().includes(this.searchres)
//       );
//     });
//     console.log(this.res)
//   }

// }



