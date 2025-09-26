import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo5 } from './compo-5';

describe('Compo5', () => {
  let component: Compo5;
  let fixture: ComponentFixture<Compo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
