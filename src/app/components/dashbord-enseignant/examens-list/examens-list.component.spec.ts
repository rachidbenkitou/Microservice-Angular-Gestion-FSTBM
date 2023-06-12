import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensListComponent } from './examens-list.component';

describe('ExamensListComponent', () => {
  let component: ExamensListComponent;
  let fixture: ComponentFixture<ExamensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamensListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
