import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsFormComponent } from './inscriptions-form.component';

describe('InscriptionsFormComponent', () => {
  let component: InscriptionsFormComponent;
  let fixture: ComponentFixture<InscriptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
