import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaseRouteComponent } from './app-base-route.component';

describe('AppBaseRouteComponent', () => {
  let component: AppBaseRouteComponent;
  let fixture: ComponentFixture<AppBaseRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBaseRouteComponent]
    });
    fixture = TestBed.createComponent(AppBaseRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
