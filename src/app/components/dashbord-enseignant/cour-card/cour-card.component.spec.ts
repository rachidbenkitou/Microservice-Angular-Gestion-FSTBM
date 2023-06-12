import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourCardComponent } from './cour-card.component';

describe('CourCardComponent', () => {
  let component: CourCardComponent;
  let fixture: ComponentFixture<CourCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
