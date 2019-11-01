import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineListComponent } from './requestline-list.component';

describe('RequestlineListComponent', () => {
  let component: RequestlineListComponent;
  let fixture: ComponentFixture<RequestlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
