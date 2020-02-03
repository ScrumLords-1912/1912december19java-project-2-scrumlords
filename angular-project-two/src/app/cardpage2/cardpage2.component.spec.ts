import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardpage2Component } from './cardpage2.component';

describe('Cardpage2Component', () => {
  let component: Cardpage2Component;
  let fixture: ComponentFixture<Cardpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
