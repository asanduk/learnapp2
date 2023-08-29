import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckModeComponent } from './check-mode.component';

describe('CheckModeComponent', () => {
  let component: CheckModeComponent;
  let fixture: ComponentFixture<CheckModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckModeComponent]
    });
    fixture = TestBed.createComponent(CheckModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
