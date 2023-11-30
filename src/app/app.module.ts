import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalVariableService } from './services/global-variable.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
          BrowserModule, 
          IonicModule.forRoot(), 
          AppRoutingModule,
          FormsModule,
          ReactiveFormsModule,
          SharedModule,
          SharedModuleModule,
          WebcamModule,
          HttpClientModule
        ],
  providers: [
             { provide: RouteReuseStrategy, 
             useClass: IonicRouteStrategy,            
             },
             GlobalVariableService
            ],
  bootstrap: [AppComponent],
  exports:[],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
