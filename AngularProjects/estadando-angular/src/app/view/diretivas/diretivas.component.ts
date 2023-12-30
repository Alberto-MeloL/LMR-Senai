import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
 ativo: boolean = true;

verificarAtivo():boolean{
 return this.ativo
}

//um array de classe, posso fazer testes para adicionar uma lista específica.Se tiver duas classes, no css ele ira pegar o estilos da primeira que aparecer
classes = ['teste01', 'teste02']
underline = 'teste03'
//as diretivas são ngAlgumaCoisaa
}