import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsListComponent } from './etudiants-list.component';

describe('EtudiantsListComponent', () => {
  let component: EtudiantsListComponent;
  let fixture: ComponentFixture<EtudiantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
