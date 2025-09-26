import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsUnicast } from './rxjs-unicast';

describe('RxjsUnicast', () => {
  let component: RxjsUnicast;
  let fixture: ComponentFixture<RxjsUnicast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsUnicast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsUnicast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
