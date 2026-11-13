import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complementarias } from './complementarias';

describe('Complementarias', () => {
  let component: Complementarias;
  let fixture: ComponentFixture<Complementarias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complementarias],
    }).compileComponents();

    fixture = TestBed.createComponent(Complementarias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
