import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCompradorComponent } from './eventos-comprador.component';

describe('EventosCompradorComponent', () => {
  let component: EventosCompradorComponent;
  let fixture: ComponentFixture<EventosCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
