import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancer } from './cancer';

describe('Cancer', () => {
  let component: Cancer;
  let fixture: ComponentFixture<Cancer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cancer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cancer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
