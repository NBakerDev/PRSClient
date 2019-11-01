import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewlistReviewComponent } from './request-reviewlist-review.component';

describe('RequestReviewlistReviewComponent', () => {
  let component: RequestReviewlistReviewComponent;
  let fixture: ComponentFixture<RequestReviewlistReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReviewlistReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewlistReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
