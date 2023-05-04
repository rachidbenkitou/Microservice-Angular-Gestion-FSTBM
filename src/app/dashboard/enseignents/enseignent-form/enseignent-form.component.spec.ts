import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignentFormComponent } from './enseignent-form.component';

describe('EnseignentFormComponent', () => {
  let component: EnseignentFormComponent;
  let fixture: ComponentFixture<EnseignentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
