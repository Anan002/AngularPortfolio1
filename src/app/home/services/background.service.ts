import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgrounds = [
    'assets/backgrounds/background1.jpg',
    'assets/backgrounds/background2.jpg',
    'assets/backgrounds/background3.jpg',
    'assets/backgrounds/background6.jpeg',
    'assets/backgrounds/background7.jfif',
    'assets/backgrounds/background8.jfif'
  ];

  getRandomBackground(): string {
    const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
    return this.backgrounds[randomIndex];
  }
}