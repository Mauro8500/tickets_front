import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVendedorComponent } from './dashboard-vendedor.component';

describe('DashboardVendedorComponent', () => {
  let component: DashboardVendedorComponent;
  let fixture: ComponentFixture<DashboardVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
