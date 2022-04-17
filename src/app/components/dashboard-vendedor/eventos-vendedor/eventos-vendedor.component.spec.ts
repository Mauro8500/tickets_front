import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosVendedorComponent } from './eventos-vendedor.component';

describe('EventosVendedorComponent', () => {
  let component: EventosVendedorComponent;
  let fixture: ComponentFixture<EventosVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
