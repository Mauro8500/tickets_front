import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinfoevencComponent } from './masinfoevenc.component';

describe('MasinfoevencComponent', () => {
  let component: MasinfoevencComponent;
  let fixture: ComponentFixture<MasinfoevencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasinfoevencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasinfoevencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
