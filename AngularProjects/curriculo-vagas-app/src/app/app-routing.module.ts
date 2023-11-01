import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';

const routes: Routes = [
  {path: 'curriculos', component: CurriculosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'painel-vagas', component: PainelVagasComponent},
  {path: 'vagas', component: VagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
