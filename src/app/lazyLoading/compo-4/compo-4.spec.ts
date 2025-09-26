import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo4 } from './compo-4';

describe('Compo4', () => {
  let component: Compo4;
  let fixture: ComponentFixture<Compo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
