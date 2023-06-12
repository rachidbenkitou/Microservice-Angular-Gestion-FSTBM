import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionListComponent } from './inscription-list.component';

describe('InscriptionListComponent', () => {
  let component: InscriptionListComponent;
  let fixture: ComponentFixture<InscriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
