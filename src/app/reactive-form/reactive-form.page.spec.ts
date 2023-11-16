import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormPage } from './reactive-form.page';

describe('ReactiveFormPage', () => {
  let component: ReactiveFormPage;
  let fixture: ComponentFixture<ReactiveFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactiveFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
