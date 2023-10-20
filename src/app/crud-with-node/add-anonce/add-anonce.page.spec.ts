import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddAnoncePage } from './add-anonce.page';

describe('AddAnoncePage', () => {
  let component: AddAnoncePage;
  let fixture: ComponentFixture<AddAnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
