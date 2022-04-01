import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoEventoComponent } from './form-nuevo-evento.component';

describe('FormNuevoEventoComponent', () => {
  let component: FormNuevoEventoComponent;
  let fixture: ComponentFixture<FormNuevoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
