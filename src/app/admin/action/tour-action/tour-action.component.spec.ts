import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourActionComponent } from './tour-action.component';

describe('TourActionComponent', () => {
  let component: TourActionComponent;
  let fixture: ComponentFixture<TourActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
