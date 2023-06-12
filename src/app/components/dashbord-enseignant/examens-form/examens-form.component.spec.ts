import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensFormComponent } from './examens-form.component';

describe('ExamensFormComponent', () => {
  let component: ExamensFormComponent;
  let fixture: ComponentFixture<ExamensFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamensFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
