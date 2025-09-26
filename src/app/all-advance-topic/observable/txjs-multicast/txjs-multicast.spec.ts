import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxjsMulticast } from './txjs-multicast';

describe('TxjsMulticast', () => {
  let component: TxjsMulticast;
  let fixture: ComponentFixture<TxjsMulticast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxjsMulticast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxjsMulticast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
