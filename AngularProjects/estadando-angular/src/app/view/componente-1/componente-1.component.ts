//arquivo de lógica do componente
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-1',
  templateUrl: './componente-1.component.html',
  styleUrls: ['./componente-1.component.css']
})
export class Componente1Component {

  @Input() name: string = ''
  @Input() dados!: {email: string, salario: number}
// nome: string = "Alberto"
// idade: number = 17
}
