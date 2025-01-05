import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { driver } from '../../driver';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input() vozac: driver | undefined;
  @Input() indeks: number | undefined;

  stilIme() {
    return {
      'name-display': true,
      'special-driver': this.vozac?.category === 'EXPERT'
    };
  }

  stilKarticka() {
    return {
      'driver-card': true,
      'expert': this.vozac?.category === 'EXPERT',
      'lunatic': this.vozac?.category === 'LUNATIC',
      'beginner': this.vozac?.category === 'ASD'
    };
  }

  kliknatKopce() {
    console.log('Driver details requested for:', this.vozac?.name);
  }
}