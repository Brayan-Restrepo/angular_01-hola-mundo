import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  frase: any = {
    mensaje: 'Mensaje numero 1',
    autor: 'Brayan'
  };

  mostrar = true;

  personajes: string[] = ['Arya', 'Brandon', 'Jhon'];
}
