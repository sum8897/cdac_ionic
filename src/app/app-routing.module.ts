import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template-form/template-form.module').then( m => m.TemplateFormPageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then( m => m.ReactiveFormPageModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then( m => m.ParentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
