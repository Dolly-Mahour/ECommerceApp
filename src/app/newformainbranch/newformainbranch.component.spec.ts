import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformainbranchComponent } from './newformainbranch.component';

describe('NewformainbranchComponent', () => {
  let component: NewformainbranchComponent;
  let fixture: ComponentFixture<NewformainbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewformainbranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewformainbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
