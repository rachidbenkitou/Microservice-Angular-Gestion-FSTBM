import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenListComponent } from './examen-list.component';

describe('ExamenListComponent', () => {
  let component: ExamenListComponent;
  let fixture: ComponentFixture<ExamenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
