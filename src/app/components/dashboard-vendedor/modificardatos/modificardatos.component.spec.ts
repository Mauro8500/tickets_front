import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosComponent } from './modificardatos.component';

describe('ModificardatosComponent', () => {
  let component: ModificardatosComponent;
  let fixture: ComponentFixture<ModificardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificardatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
