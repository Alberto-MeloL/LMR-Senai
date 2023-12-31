import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './view/componente-1/componente-1.component';
import { Componente2Component } from './view/componente-2/componente-2.component';
import { DiretivasComponent } from './view/diretivas/diretivas.component';
import { IfRenderComponent } from './view/if-render/if-render.component';
import { EventosComponent } from './view/eventos/eventos.component';
import { EmitterComponent } from './view/emitter/emitter.component';
import { ChangeNumberComponent } from './view/change-number/change-number.component';
import { ListRenderComponent } from './view/list-render/list-render.component';
import { PipesComponent } from './view/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    DiretivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
