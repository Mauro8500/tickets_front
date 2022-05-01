import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormodicomComponent } from './formodicom.component';

describe('FormodicomComponent', () => {
  let component: FormodicomComponent;
  let fixture: ComponentFixture<FormodicomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormodicomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormodicomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
