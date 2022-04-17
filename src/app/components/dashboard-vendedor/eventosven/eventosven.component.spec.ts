import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosvenComponent } from './eventosven.component';

describe('EventosComponent', () => {
  let component: EventosvenComponent;
  let fixture: ComponentFixture<EventosvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
