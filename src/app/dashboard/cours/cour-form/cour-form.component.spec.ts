import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourFormComponent } from './cour-form.component';

describe('CourFormComponent', () => {
  let component: CourFormComponent;
  let fixture: ComponentFixture<CourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
