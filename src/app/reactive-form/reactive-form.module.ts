import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPageRoutingModule } from './reactive-form-routing.module';

import { ReactiveFormPage } from './reactive-form.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModuleModule,
    ReactiveFormPageRoutingModule
  ],
  declarations: [ReactiveFormPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ReactiveFormPageModule {}
