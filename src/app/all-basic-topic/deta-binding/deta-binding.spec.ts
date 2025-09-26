import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaBinding } from './deta-binding';

describe('DetaBinding', () => {
  let component: DetaBinding;
  let fixture: ComponentFixture<DetaBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
