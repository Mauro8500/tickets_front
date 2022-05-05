import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoevenvComponent } from './infoevenv.component';

describe('InfoevenvComponent', () => {
  let component: InfoevenvComponent;
  let fixture: ComponentFixture<InfoevenvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoevenvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoevenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
