import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-directive',
  standalone:true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {
  public showData:boolean=false

 data = ['Angular', 'React', 'Vue'];


}
