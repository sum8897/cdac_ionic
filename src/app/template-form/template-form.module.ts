import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateFormPageRoutingModule } from './template-form-routing.module';

import { TemplateFormPage } from './template-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TemplateFormPageRoutingModule
  ],
  declarations: [TemplateFormPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TemplateFormPageModule { }
