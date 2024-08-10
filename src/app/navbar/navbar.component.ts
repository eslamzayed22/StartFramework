import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('nav') el!:ElementRef;

  @HostListener('window:scroll') onScroll() {
    if (scrollY > 100){
      this.el.nativeElement.classList.remove("py-3")
    }
    else {
      this.el.nativeElement.classList.add("py-3")
    }
  }
}
