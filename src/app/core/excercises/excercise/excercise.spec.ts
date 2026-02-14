import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excercise } from './excercise';

describe('Excercise', () => {
  let component: Excercise;
  let fixture: ComponentFixture<Excercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Excercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
