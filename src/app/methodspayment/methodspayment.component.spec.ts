import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodspaymentComponent } from './methodspayment.component';

describe('MethodspaymentComponent', () => {
  let component: MethodspaymentComponent;
  let fixture: ComponentFixture<MethodspaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodspaymentComponent]
    });
    fixture = TestBed.createComponent(MethodspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
