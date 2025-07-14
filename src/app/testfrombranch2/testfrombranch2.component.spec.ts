import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testfrombranch2Component } from './testfrombranch2.component';

describe('Testfrombranch2Component', () => {
  let component: Testfrombranch2Component;
  let fixture: ComponentFixture<Testfrombranch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testfrombranch2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testfrombranch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
