import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './view/componente-1/componente-1.component';
import { Componente2Component } from './view/componente-2/componente-2.component';
import { DiretivasComponent } from './view/diretivas/diretivas.component';
import { IfRenderComponent } from './view/if-render/if-render.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    DiretivasComponent,
    IfRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
