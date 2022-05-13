import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificartelefonoComponent } from './modificartelefono.component';

describe('ModificartelefonoComponent', () => {
  let component: ModificartelefonoComponent;
  let fixture: ComponentFixture<ModificartelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificartelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificartelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
