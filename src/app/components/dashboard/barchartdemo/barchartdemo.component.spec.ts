import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartdemoComponent } from './barchartdemo.component';

describe('BarchartdemoComponent', () => {
  let component: BarchartdemoComponent;
  let fixture: ComponentFixture<BarchartdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
