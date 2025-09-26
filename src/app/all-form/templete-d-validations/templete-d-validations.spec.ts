import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteDValidations } from './templete-d-validations';

describe('TempleteDValidations', () => {
  let component: TempleteDValidations;
  let fixture: ComponentFixture<TempleteDValidations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteDValidations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleteDValidations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
