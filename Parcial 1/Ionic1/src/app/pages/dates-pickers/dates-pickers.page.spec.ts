import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatesPickersPage } from './dates-pickers.page';

describe('DatesPickersPage', () => {
  let component: DatesPickersPage;
  let fixture: ComponentFixture<DatesPickersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesPickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
