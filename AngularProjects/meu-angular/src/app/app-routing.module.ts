import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//o outlet pega o path
  exports: [RouterModule]
})
export class AppRoutingModule { }
