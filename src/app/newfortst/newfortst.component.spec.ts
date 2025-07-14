import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfortstComponent } from './newfortst.component';

describe('NewfortstComponent', () => {
  let component: NewfortstComponent;
  let fixture: ComponentFixture<NewfortstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewfortstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewfortstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
