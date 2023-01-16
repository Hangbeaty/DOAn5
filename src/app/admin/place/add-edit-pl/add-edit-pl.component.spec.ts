import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlComponent } from './add-edit-pl.component';

describe('AddEditPlComponent', () => {
  let component: AddEditPlComponent;
  let fixture: ComponentFixture<AddEditPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
