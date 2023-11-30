import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child5Component } from '../child5/child5.component';
import { Child3Component } from '../child3/child3.component';



@NgModule({
  declarations: [Child5Component,
                 Child3Component
                ],
  imports: [
    CommonModule
  ],
  exports:[
    Child5Component,
    Child3Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class SharedModuleModule { }
