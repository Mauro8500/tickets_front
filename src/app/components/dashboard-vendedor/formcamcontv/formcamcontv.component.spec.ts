import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcamcontvComponent } from './formcamcontv.component';

describe('FormcamcontvComponent', () => {
  let component: FormcamcontvComponent;
  let fixture: ComponentFixture<FormcamcontvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcamcontvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcamcontvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
