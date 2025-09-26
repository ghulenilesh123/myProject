import { Component, signal, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { LoginService } from './all-service/loginservice/login-service';
import { single } from 'rxjs';
import { Login } from './pages/login/login';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}



  



