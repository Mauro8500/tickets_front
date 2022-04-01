import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaEmpresaComponent } from './form-nueva-empresa.component';

describe('FormNuevaEmpresaComponent', () => {
  let component: FormNuevaEmpresaComponent;
  let fixture: ComponentFixture<FormNuevaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
