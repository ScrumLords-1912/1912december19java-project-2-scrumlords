import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardpage4Component } from './cardpage4.component';

describe('Cardpage4Component', () => {
  let component: Cardpage4Component;
  let fixture: ComponentFixture<Cardpage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardpage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
