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

    // Check if scrolled down more than 100px
    if (verticalOffset > 100) {
      // Remove py-3 class from navbar
      this.renderer.removeClass(document.querySelector('nav'), 'py-3' );
      this.isNavbarExpanded = false;
    } else {
      // Add py-3 class back to navbar
      this.renderer.addClass(document.querySelector('nav'), 'py-3');
      this.isNavbarExpanded = true;
    }
  }
}
