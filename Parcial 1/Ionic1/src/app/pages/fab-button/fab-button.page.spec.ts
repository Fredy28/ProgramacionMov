import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FabButtonPage } from './fab-button.page';

describe('FabButtonPage', () => {
  let component: FabButtonPage;
  let fixture: ComponentFixture<FabButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FabButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
