import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DeleteAnoncePage } from './delete-anonce.page';

describe('DeleteAnoncePage', () => {
  let component: DeleteAnoncePage;
  let fixture: ComponentFixture<DeleteAnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteAnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
