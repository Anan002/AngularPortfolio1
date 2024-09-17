import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Anandan';
  professionalDescription = 'Experienced developer with a passion for creating scalable and efficient applications.';
  personalDescription = 'When I’m not coding, I’m hitting the gym. Fitness is a huge part of my life, and I love pushing my limits.';

  viewMore() {
    
  }

  seeMore() {
    
  }
}
