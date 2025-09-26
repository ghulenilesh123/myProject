import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from '../../all-service/loginservice/login-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private loginservice:LoginService,private router:Router) {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      name:['']
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const {name,password}=this.loginForm.value
      // console.log('Login:', this.loginForm.value);
      this.loginservice.getdata().subscribe((users:any) => {
        const matchedUser = users.find((user:any) => user.name=== name && user.password===password);
        console.log(matchedUser)
        if(matchedUser){
          this.router.navigateByUrl("home")
          alert("login successfully")
          this.loginservice.login()
        }else{
          this.router.navigateByUrl("login")
          alert ("please Enter valid username")

        }
      })
        
      }else{
      }
      
    }
  }

