import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAnoncePage } from './update-anonce.page';

describe('UpdateAnoncePage', () => {
  let component: UpdateAnoncePage;
  let fixture: ComponentFixture<UpdateAnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateAnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
