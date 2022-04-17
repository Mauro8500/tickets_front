import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompradorComponent } from './dashboard-comprador.component';

describe('DashboardCompradorComponent', () => {
  let component: DashboardCompradorComponent;
  let fixture: ComponentFixture<DashboardCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
