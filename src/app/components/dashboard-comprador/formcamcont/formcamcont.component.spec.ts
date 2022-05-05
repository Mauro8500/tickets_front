import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcamcontComponent } from './formcamcont.component';

describe('FormcamcontComponent', () => {
  let component: FormcamcontComponent;
  let fixture: ComponentFixture<FormcamcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcamcontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcamcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
