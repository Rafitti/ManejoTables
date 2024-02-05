import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillarendicionComponent } from './grillarendicion.component';

describe('GrillarendicionComponent', () => {
  let component: GrillarendicionComponent;
  let fixture: ComponentFixture<GrillarendicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrillarendicionComponent]
    });
    fixture = TestBed.createComponent(GrillarendicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
