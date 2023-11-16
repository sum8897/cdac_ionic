import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateFormPage } from './template-form.page';

describe('TemplateFormPage', () => {
  let component: TemplateFormPage;
  let fixture: ComponentFixture<TemplateFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TemplateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
