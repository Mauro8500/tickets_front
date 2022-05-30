import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartultmesComponent } from './chartultmes.component';

describe('ChartultmesComponent', () => {
  let component: ChartultmesComponent;
  let fixture: ComponentFixture<ChartultmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartultmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartultmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
