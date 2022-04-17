import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvendedorComponent } from './loginvendedor.component';

describe('LoginvendedorComponent', () => {
  let component: LoginvendedorComponent;
  let fixture: ComponentFixture<LoginvendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginvendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
