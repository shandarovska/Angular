// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from "./comp/comp.component";
import { DRIVERS } from '../db-data';
import { CommonModule } from '@angular/common';
import { driver } from '../driver';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MotoGP Riders';

  // Individual driver references
  pecco: driver = DRIVERS[0];
  martin: driver = DRIVERS[1];
  marquez: driver = DRIVERS[2];
  
  // Full drivers array
  vozaci = DRIVERS;

  kliknatVozac() {
    console.log("App component function called");
  }


}