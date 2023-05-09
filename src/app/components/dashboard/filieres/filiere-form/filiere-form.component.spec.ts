import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliereFormComponent } from './filiere-form.component';

describe('FiliereFormComponent', () => {
  let component: FiliereFormComponent;
  let fixture: ComponentFixture<FiliereFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliereFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliereFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
