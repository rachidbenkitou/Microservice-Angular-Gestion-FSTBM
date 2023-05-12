import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEditFormComponent } from './examen-edit-form.component';

describe('ExamenEditFormComponent', () => {
  let component: ExamenEditFormComponent;
  let fixture: ComponentFixture<ExamenEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
