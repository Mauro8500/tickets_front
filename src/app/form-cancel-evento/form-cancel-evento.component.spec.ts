import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancelEventoComponent } from './form-cancel-evento.component';

describe('FormCancelEventoComponent', () => {
  let component: FormCancelEventoComponent;
  let fixture: ComponentFixture<FormCancelEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCancelEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCancelEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
