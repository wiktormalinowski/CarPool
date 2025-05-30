import { Component, ViewChild } from '@angular/core';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-car-list-container',
  standalone: true,
  imports: [CarListComponent],
  templateUrl: './car-list-container.component.html'
})
export class CarListContainerComponent {
  @ViewChild('availableList') availableList!: CarListComponent;
  @ViewChild('reservedList') reservedList!: CarListComponent;

  refreshLists(): void {
    this.availableList.fetchCars();
    this.reservedList.fetchCars();
  }

}
