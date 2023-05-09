import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignentsComponent } from './enseignents.component';

describe('EnseignentsComponent', () => {
  let component: EnseignentsComponent;
  let fixture: ComponentFixture<EnseignentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
