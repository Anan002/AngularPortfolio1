import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Anandan';
  professionalDescription = 'Experienced developer with a passion for creating scalable and efficient applications. Just take a look at the projects I’ve worked on.';
  personalDescription = 'Not everything can be a perfect fit, but body fitness is something we can always work on. Fitness is a huge part of my life, and I love pushing my limits.';

  viewMore() {
    
  }

  seeMore() {
    
  }
}
