import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageallComponent } from './webpageall.component';

describe('WebpageallComponent', () => {
  let component: WebpageallComponent;
  let fixture: ComponentFixture<WebpageallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebpageallComponent]
    });
    fixture = TestBed.createComponent(WebpageallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
