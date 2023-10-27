import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//o outlet pega o path, angular trabalha com componentes facilita na hora da manutenção e organização (Ex: um banner porem para todas as paginas)
  exports: [RouterModule]
})
export class AppRoutingModule { }
//por rotas
//usar modulos importar rota