import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fortesting3Component } from './fortesting3.component';

describe('Fortesting3Component', () => {
  let component: Fortesting3Component;
  let fixture: ComponentFixture<Fortesting3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fortesting3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fortesting3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
