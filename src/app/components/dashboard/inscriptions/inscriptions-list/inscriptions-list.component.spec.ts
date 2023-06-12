import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsListComponent } from './inscriptions-list.component';

describe('InscriptionsListComponent', () => {
  let component: InscriptionsListComponent;
  let fixture: ComponentFixture<InscriptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
