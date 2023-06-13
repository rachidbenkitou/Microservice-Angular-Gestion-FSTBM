import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAjoutFormComponent } from './note-ajout-form.component';

describe('NoteAjoutFormComponent', () => {
  let component: NoteAjoutFormComponent;
  let fixture: ComponentFixture<NoteAjoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAjoutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAjoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
