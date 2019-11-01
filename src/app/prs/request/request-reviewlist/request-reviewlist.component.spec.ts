import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewlistComponent } from './request-reviewlist.component';

describe('RequestReviewlistComponent', () => {
  let component: RequestReviewlistComponent;
  let fixture: ComponentFixture<RequestReviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
