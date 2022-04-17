import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarvenComponent } from './navbarven.component';

describe('NavbarvenComponent', () => {
  let component: NavbarvenComponent;
  let fixture: ComponentFixture<NavbarvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
