import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensEditFormComponent } from './examens-edit-form.component';

describe('ExamensEditFormComponent', () => {
  let component: ExamensEditFormComponent;
  let fixture: ComponentFixture<ExamensEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamensEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamensEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
