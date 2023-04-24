import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSelectionComponent } from './train-selection.component';

describe('TrainSelectionComponent', () => {
  let component: TrainSelectionComponent;
  let fixture: ComponentFixture<TrainSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
