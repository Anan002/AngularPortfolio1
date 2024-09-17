import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Welcome to Anandan Portfolio';
  backgroundImage = ''; 

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.backgroundImage = this.backgroundService.getRandomBackground();
  }
}
