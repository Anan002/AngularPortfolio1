import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgrounds = [
    'assets/backgrounds/background1.jpg',
    'assets/backgrounds/background2.jpg',
    'assets/backgrounds/background3.jpg',
    'assets/backgrounds/background4.jpg',
    'assets/backgrounds/background5.jpg',
    'assets/backgrounds/background6.jpg',
    'assets/backgrounds/background8.jpeg',
    'assets/backgrounds/background9.jpg',
    'assets/backgrounds/background11.jfif',
    'assets/backgrounds/background12.jfif',
    'assets/backgrounds/background13.jpg',
    'assets/backgrounds/background14.jpg'
  ];

  getRandomBackground(): string {
    const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
    return this.backgrounds[randomIndex];
  }
}