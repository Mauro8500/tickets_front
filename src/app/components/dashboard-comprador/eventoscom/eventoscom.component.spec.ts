import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoscomComponent } from './eventoscom.component';

describe('EventoscomComponent', () => {
  let component: EventoscomComponent;
  let fixture: ComponentFixture<EventoscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoscomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
