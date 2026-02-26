import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBe } from './to-be';

describe('ToBe', () => {
  let component: ToBe;
  let fixture: ComponentFixture<ToBe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToBe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToBe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
