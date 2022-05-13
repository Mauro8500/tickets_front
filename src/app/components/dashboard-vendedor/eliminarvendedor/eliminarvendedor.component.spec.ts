import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarvendedorComponent } from './eliminarvendedor.component';

describe('EliminarvendedorComponent', () => {
  let component: EliminarvendedorComponent;
  let fixture: ComponentFixture<EliminarvendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarvendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
