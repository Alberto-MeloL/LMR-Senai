import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  //array de objetos

  //Com a interface, então os meus item tem que estar alinhados a ela
  //Deixar animais: object[] =[], fica muito amplo, então fica melhor por a interface
  animais: Animal[] = [//Menos chances de ter erros
    { name: 'Lili', type: 'cachorro', age: 12 },
    { name: 'Neguinha', type: 'cachorro', age: 11 },
    { name: 'Zé', type: 'gato', age: 2 },
    { name: 'Teco', type: 'passáro', age: 132 },
  ];

  //Isso sem a interfae
  // animais = [
  //   {name: 'Lili', type: 'cachorro'},
  //   {name: 'Neguinha', type: 'cachorro'},
  //   {name: 'Zé', type: 'gato'},
  //   {name: 'Teco', type: 'passáro'},
  // ]

  //Da para por aqui tambem a interface
  compras = {
    name: 'Porshe',
    type: 'carro',
  };

detalhesAnimal: string = ''
detalhesAnimalStyle: any = {}

  verIdade(animal: Animal){//alinhado com a minha interface
this.detalhesAnimal = `A(o) ${animal.name} tem ${animal.age} anos`

  }
  
  ngOnInit(): void {
    
this.detalhesAnimalStyle = {
  'red': true,
  'fonte': true
}
  }
}
