import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormodvenComponent } from './formodven.component';

describe('FormodvenComponent', () => {
  let component: FormodvenComponent;
  let fixture: ComponentFixture<FormodvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormodvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormodvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
