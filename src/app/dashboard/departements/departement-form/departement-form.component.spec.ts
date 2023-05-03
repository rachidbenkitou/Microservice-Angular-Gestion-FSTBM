import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementFormComponent } from './departement-form.component';

describe('DepartementFormComponent', () => {
  let component: DepartementFormComponent;
  let fixture: ComponentFixture<DepartementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
