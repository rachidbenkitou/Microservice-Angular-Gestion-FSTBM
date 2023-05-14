import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEditFormComponent } from './module-edit-form.component';

describe('ModuleEditFormComponent', () => {
  let component: ModuleEditFormComponent;
  let fixture: ComponentFixture<ModuleEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
