import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateFormPageRoutingModule } from './template-form-routing.module';

import { TemplateFormPage } from './template-form.page';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';

import { Child4Component } from '../child4/child4.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
// import { ChildComponent } from '../child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModuleModule,
    TemplateFormPageRoutingModule,
    
  ],
  declarations: [TemplateFormPage,
                 ChildComponent,
                 Child2Component,
                 
                 Child4Component,
                 ]
                 ,
  schemas: [NO_ERRORS_SCHEMA]
})
export class TemplateFormPageModule { }
