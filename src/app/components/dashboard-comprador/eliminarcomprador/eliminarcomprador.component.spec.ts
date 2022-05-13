import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcompradorComponent } from './eliminarcomprador.component';

describe('EliminarcompradorComponent', () => {
  let component: EliminarcompradorComponent;
  let fixture: ComponentFixture<EliminarcompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarcompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
