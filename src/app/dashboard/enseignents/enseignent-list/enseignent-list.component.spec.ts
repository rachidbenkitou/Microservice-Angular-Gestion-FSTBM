import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignentListComponent } from './enseignent-list.component';

describe('EnseignentListComponent', () => {
  let component: EnseignentListComponent;
  let fixture: ComponentFixture<EnseignentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
