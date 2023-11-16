import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormPage } from './template-form.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateFormPageRoutingModule {}
