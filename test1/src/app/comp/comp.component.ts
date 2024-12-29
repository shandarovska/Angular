import { Component, Input } from '@angular/core';
import { driver } from '../../driver';

@Component({
  selector: 'app-comp',
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent { //ts
@Input()
vozac: driver | undefined;
@Input()
indeks: Number | undefined;

onDrvView(event: Event) {
  console.log("Me klikna");
}
}