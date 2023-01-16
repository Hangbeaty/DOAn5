import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactActionComponent } from './contact-action.component';

describe('ContactActionComponent', () => {
  let component: ContactActionComponent;
  let fixture: ComponentFixture<ContactActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
