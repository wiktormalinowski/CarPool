import {Component} from '@angular/core';
import {CarListComponent} from '../components/car-list/car-list.component';

@Component({
  selector: 'app-root',
  imports: [CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webui';

}
