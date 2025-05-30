import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit {

  cars: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data;
    });
  }

  removeCar(car: any) {
    this.carService.deleteCar(car.id).subscribe((data: any) => {
      this.fetchCars();
    });
  }

  getCarKeys(): string[] {
    return this.cars.length ? Object.keys(this.cars[0]) : [];
  }

}
