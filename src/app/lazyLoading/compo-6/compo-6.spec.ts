import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo6 } from './compo-6';

describe('Compo6', () => {
  let component: Compo6;
  let fixture: ComponentFixture<Compo6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
