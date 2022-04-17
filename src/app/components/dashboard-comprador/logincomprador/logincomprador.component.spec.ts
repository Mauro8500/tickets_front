import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincompradorComponent } from './logincomprador.component';

describe('LogincompradorComponent', () => {
  let component: LogincompradorComponent;
  let fixture: ComponentFixture<LogincompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
