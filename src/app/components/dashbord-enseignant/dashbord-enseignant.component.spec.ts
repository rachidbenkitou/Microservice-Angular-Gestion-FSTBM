import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordEnseignantComponent } from './dashbord-enseignant.component';

describe('DashbordEnseignantComponent', () => {
  let component: DashbordEnseignantComponent;
  let fixture: ComponentFixture<DashbordEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
