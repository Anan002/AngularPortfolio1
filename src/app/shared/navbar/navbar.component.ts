import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  toggleNavbar() {
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      if (navbarCollapse) {
          if (this.isNavbarCollapsed) {
              navbarCollapse.classList.add('show');
          } else {
              navbarCollapse.classList.remove('show');
          }
          this.isNavbarCollapsed = !this.isNavbarCollapsed;
      }
  }
}
