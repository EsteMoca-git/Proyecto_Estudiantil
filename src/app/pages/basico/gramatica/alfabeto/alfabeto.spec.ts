import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alfabeto } from './alfabeto';

describe('Alfabeto', () => {
  let component: Alfabeto;
  let fixture: ComponentFixture<Alfabeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alfabeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alfabeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
