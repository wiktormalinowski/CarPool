import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListContainerComponent } from './car-list-container.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('CarListContainerComponent', () => {
  let component: CarListContainerComponent;
  let fixture: ComponentFixture<CarListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListContainerComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
