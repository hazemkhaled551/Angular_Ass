import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioImages: string[] = [
    'assets/circus.png',
    'assets/cabin.png',
    'assets/cake.png',
    'assets/game.png',
    'assets/safe.png',
    'assets/submarine.png',
  ];
}
