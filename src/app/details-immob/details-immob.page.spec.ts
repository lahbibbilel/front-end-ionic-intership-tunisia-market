import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsImmobPage } from './details-immob.page';

describe('DetailsImmobPage', () => {
  let component: DetailsImmobPage;
  let fixture: ComponentFixture<DetailsImmobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsImmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
