import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagotarjetaComponent } from './pagotarjeta.component';

describe('PagotarjetaComponent', () => {
  let component: PagotarjetaComponent;
  let fixture: ComponentFixture<PagotarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagotarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
