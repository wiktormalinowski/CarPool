import {Component} from '@angular/core';
import {CarListComponent} from '../components/car-list/car-list.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {CarListContainerComponent} from '../components/car-list-container/car-list-container.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CarListContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webui';

}
