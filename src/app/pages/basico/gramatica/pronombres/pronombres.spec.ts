import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pronombres } from './pronombres';

describe('Pronombres', () => {
  let component: Pronombres;
  let fixture: ComponentFixture<Pronombres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pronombres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pronombres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
