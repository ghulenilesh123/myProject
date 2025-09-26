import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deta-binding',
  standalone:true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './deta-binding.html',
  styleUrl: './deta-binding.css'
})
export class DetaBinding {
  public img: any = []
  public interpolution: any = " string interpolution data"

  public propertybinding: any = "https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?pid=Api&P=0&h=180"
  public propertybinding2: any = "https://tse1.mm.bing.net/th/id/OIP.h0olEPS9LRQ4rMacHOlEMgHaFI?pid=Api&P=0&h=180"


  //  eventbinding
  click() {
    this.img = this.propertybinding2
  }

  // two way databinding
  public input: any = ''






}
