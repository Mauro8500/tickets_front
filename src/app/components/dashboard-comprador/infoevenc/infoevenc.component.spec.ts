import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoevencComponent } from './infoevenc.component';

describe('InfoevencComponent', () => {
  let component: InfoevencComponent;
  let fixture: ComponentFixture<InfoevencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoevencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoevencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
