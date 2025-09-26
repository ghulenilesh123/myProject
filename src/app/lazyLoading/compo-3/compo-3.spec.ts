import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo3 } from './compo-3';

describe('Compo3', () => {
  let component: Compo3;
  let fixture: ComponentFixture<Compo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
