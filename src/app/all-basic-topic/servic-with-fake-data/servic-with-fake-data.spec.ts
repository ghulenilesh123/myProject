import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicWithFakeData } from './servic-with-fake-data';

describe('ServicWithFakeData', () => {
  let component: ServicWithFakeData;
  let fixture: ComponentFixture<ServicWithFakeData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicWithFakeData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicWithFakeData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
