import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardpage3Component } from './cardpage3.component';

describe('Cardpage3Component', () => {
  let component: Cardpage3Component;
  let fixture: ComponentFixture<Cardpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
