import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo1 } from './compo-1';

describe('Compo1', () => {
  let component: Compo1;
  let fixture: ComponentFixture<Compo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
