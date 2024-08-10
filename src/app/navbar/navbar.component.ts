import { Component, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarExpanded = true; 

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 100) {
      this.renderer.removeClass(document.querySelector('nav'), 'py-3' );
      this.isNavbarExpanded = false;
    } else {
      this.renderer.addClass(document.querySelector('nav'), 'py-3');
      this.isNavbarExpanded = true;
    }
  }
}
