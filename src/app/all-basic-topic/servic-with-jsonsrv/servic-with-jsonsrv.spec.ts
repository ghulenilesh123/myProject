import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicWithJsonsrv } from './servic-with-jsonsrv';

describe('ServicWithJsonsrv', () => {
  let component: ServicWithJsonsrv;
  let fixture: ComponentFixture<ServicWithJsonsrv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicWithJsonsrv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicWithJsonsrv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
