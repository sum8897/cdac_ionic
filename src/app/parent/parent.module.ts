import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentPageRoutingModule } from './parent-routing.module';

import { ParentPage } from './parent.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModuleModule,
    ParentPageRoutingModule
  ],
  declarations: [ParentPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ParentPageModule {}
