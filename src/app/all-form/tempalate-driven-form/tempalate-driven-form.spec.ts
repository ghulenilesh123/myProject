import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalateDrivenForm } from './tempalate-driven-form';

describe('TempalateDrivenForm', () => {
  let component: TempalateDrivenForm;
  let fixture: ComponentFixture<TempalateDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempalateDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempalateDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
