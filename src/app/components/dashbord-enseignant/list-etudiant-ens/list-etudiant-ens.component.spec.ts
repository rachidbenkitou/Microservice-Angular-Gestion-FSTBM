import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantEnsComponent } from './list-etudiant-ens.component';

describe('ListEtudiantEnsComponent', () => {
  let component: ListEtudiantEnsComponent;
  let fixture: ComponentFixture<ListEtudiantEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudiantEnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEtudiantEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
