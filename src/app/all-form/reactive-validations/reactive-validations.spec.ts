import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidations } from './reactive-validations';

describe('ReactiveValidations', () => {
  let component: ReactiveValidations;
  let fixture: ComponentFixture<ReactiveValidations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveValidations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveValidations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
