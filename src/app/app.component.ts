import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anandandevprotfolio';
  isLoading = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isLoading = true; // Start loader
          console.log('Navigation started');
        } else {
          this.isLoading = false; // Stop loader
          console.log('Navigation ended or canceled');
        }
      });
  }
  ngOnInit() {
    // Show loader for 2 seconds on initial load
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false; // Hide loader after 2 seconds
    }, 100000);
  }
}
