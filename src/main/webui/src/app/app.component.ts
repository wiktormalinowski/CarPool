import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webui';
  cars: any[] = [];
  constructor(private carService: CarService) { }
  fetchCars(): void {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data;
    });
  }
}
