import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit {

  cars: any[] = [];
  @Input() reservedView: boolean = false;
  @Output() actionCompleted = new EventEmitter<void>();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    (this.reservedView ? this.carService.getMyCars() : this.carService.getFreeCars())
      .subscribe(cars => this.cars = cars);
  }

  removeCar(car: any) {
    this.carService.deleteCar(car.id).subscribe((data: any) => {
      this.actionCompleted.emit();
    });
  }

  reserveCar(car: any): void {
    this.carService.reserve(car.id).subscribe(() => {
      this.actionCompleted.emit();
    });
  }

  releaseCar(car: any): void {
    this.carService.release(car.id).subscribe(() => {
      this.actionCompleted.emit();
    });
  }

  getCarKeys(): string[] {
    return this.cars.length ? Object.keys(this.cars[0]) : [];
  }

}
