import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
mostrar: boolean = true;

 countClick: number = 0

//  fucMostrar(): void{
//   if (this.countClick === 0) {
//     this.mostrar = false
//     // this.countClick = (this.countClick + 1) % 2
//     this.countClick++
//   }
//   else if (this.countClick === 1) {
//     this.mostrar = true
//     this.countClick--
//   }//garante que apenas uma das condições seja verdadeira, ao invés de ter dois if(pois o seguando sera imediatemente verdadeiro)
//  }

// fucMostrar(): boolean{
// if ('click') {
//   this.countClick++
//   return this.mostrar = false
// }
// else
// {
  
// return this.mostrar = this.countClick === 1 ? true : false;
//   // return  this.mostrar = true
// }
//   // return this.mostrar false
// }
fucMostrar(): void{
  this.mostrar = !this.mostrar// mostra sempre o contrário ou seja a negação dele
}//forma mais eficiênte(toggle)
}
