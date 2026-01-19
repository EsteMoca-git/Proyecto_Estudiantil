import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intermedio } from './intermedio';

describe('Intermedio', () => {
  let component: Intermedio;
  let fixture: ComponentFixture<Intermedio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intermedio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intermedio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
