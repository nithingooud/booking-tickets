import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCompletedComponent } from './booking-completed.component';

describe('BookingCompletedComponent', () => {
  let component: BookingCompletedComponent;
  let fixture: ComponentFixture<BookingCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
