import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout (() => {
      this.peliculasEnCines=[{
      titulo: "spider man",
      fechaLanzamiento: new Date(),
      precio: 2500.45
    },
    {
      titulo: "Moana",
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 34500.3
    }]
  }, 3000);
  
}
title = 'hola holi';

peliculasEnCines;

peliculasProximosEstrenos=[];

  duplicarNumero(valor: number): number{
    return valor*2;
  }
}
