import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalistComponent } from './dentalist.component';

describe('DentalistComponent', () => {
  let component: DentalistComponent;
  let fixture: ComponentFixture<DentalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentalistComponent]
    });
    fixture = TestBed.createComponent(DentalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
