import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionComponent } from './rendicion.component';

describe('RendicionComponent', () => {
  let component: RendicionComponent;
  let fixture: ComponentFixture<RendicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendicionComponent]
    });
    fixture = TestBed.createComponent(RendicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
