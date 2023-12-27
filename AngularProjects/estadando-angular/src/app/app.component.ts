import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nomeDeUsuario: string = 'Alberto Melo De Lima';
  dadosUsuario = {
    email: 'alberto@gmail.com',
    salario: 100000,
  };
  title = 'estadando-angular';
}
