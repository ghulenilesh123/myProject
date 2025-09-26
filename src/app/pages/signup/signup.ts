import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from '../../all-service/loginservice/login-service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  showheader:any=""
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

     
  onSignup() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value
      // console.log('Login:', this.loginForm.value);
      this.loginservice.getdata().subscribe((users: any) => {
        const matchedUser = users.find((user: any) => user.email == email && user.password == password);
        console.log(typeof matchedUser)

        if (matchedUser) {
          alert("user allready exist")
        } else {
          console.log('Signup:', this.signupForm.value);
          alert("send successfully")
           //show header
           this.loginservice.login()

          this.loginservice.setdata(this.signupForm.value).subscribe((res: any) => {
            console.log(res)
            this.router.navigateByUrl("/home")
            this.showheader=true

          })
        }
      })
    }


  }
}
