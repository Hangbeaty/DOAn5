import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceActionComponent } from './place-action.component';

describe('PlaceActionComponent', () => {
  let component: PlaceActionComponent;
  let fixture: ComponentFixture<PlaceActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
