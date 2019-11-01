import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineRemoveComponent } from './requestline-remove.component';

describe('RequestlineRemoveComponent', () => {
  let component: RequestlineRemoveComponent;
  let fixture: ComponentFixture<RequestlineRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestlineRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
