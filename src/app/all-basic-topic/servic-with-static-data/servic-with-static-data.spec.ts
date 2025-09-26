import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicWithStaticData } from './servic-with-static-data';

describe('ServicWithStaticData', () => {
  let component: ServicWithStaticData;
  let fixture: ComponentFixture<ServicWithStaticData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicWithStaticData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicWithStaticData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
