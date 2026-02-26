import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateContent } from './intermediate-content';

describe('IntermediateContent', () => {
  let component: IntermediateContent;
  let fixture: ComponentFixture<IntermediateContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
