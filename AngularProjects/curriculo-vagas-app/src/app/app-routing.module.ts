import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Rota para a página inicial
  { path: 'curriculos', component: CurriculosComponent }, // Rota para currículos
  { path: 'vagas', component: VagasComponent }, // Rota para vagas
  {path: 'painel-vagas', component: PainelVagasComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
