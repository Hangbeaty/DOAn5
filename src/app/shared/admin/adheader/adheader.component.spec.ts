import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdheaderComponent } from './adheader.component';

describe('AdheaderComponent', () => {
  let component: AdheaderComponent;
  let fixture: ComponentFixture<AdheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
