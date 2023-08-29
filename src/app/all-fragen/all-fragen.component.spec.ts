import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFragenComponent } from './all-fragen.component';

describe('AllFragenComponent', () => {
  let component: AllFragenComponent;
  let fixture: ComponentFixture<AllFragenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFragenComponent]
    });
    fixture = TestBed.createComponent(AllFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
