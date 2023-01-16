import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdfooterComponent } from './adfooter.component';

describe('AdfooterComponent', () => {
  let component: AdfooterComponent;
  let fixture: ComponentFixture<AdfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
