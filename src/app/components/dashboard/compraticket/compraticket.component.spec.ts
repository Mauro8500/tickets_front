import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraticketComponent } from './compraticket.component';

describe('CompraticketComponent', () => {
  let component: CompraticketComponent;
  let fixture: ComponentFixture<CompraticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
