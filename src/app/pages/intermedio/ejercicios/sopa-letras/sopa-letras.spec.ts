import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaLetras } from './sopa-letras';

describe('SopaLetras', () => {
  let component: SopaLetras;
  let fixture: ComponentFixture<SopaLetras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopaLetras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopaLetras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
