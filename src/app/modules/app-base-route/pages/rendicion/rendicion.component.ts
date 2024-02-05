import { Component } from '@angular/core';

@Component({
  selector: 'app-rendicionweb',
  templateUrl: './rendicion.component.html',
  styleUrls: ['./rendicion.component.scss']
})
export class RendicionComponent {



  estado(n: number){
    console.log('fue clickeados: ', n )
  }
}
