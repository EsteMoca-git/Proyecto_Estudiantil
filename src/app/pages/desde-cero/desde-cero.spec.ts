import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdeCero } from './desde-cero';

describe('DesdeCero', () => {
  let component: DesdeCero;
  let fixture: ComponentFixture<DesdeCero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesdeCero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesdeCero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
