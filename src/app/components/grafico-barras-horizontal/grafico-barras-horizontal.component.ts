import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barras-horizontal',
  templateUrl: './grafico-barras-horizontal.component.html',
  styleUrls: ['./grafico-barras-horizontal.component.css']
})
export class GraficoBarrasHorizontalComponent implements OnInit, OnDestroy {


  // Datos de prueba
  public results: any[] = [
    {
      name: 'Juego1',
      value: 500
    },
    {
      name: 'Juego2',
      value: 1212
    },
    {
      name: 'Juego3',
      value: 222
    },
    {
      name: 'Juego4',
      value: 1112
    }
  ];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Juegos';
  public showYAxisLabel = true;
  public yAxisLabel = 'Votos';
  public colorScheme = 'nightLights';

  public intervalo;

  constructor() {
    // Prueba de datos en "tiempo-real"
    this.intervalo = setInterval(() => {
      const newResult = [...this.results];

      // tslint:disable-next-line: forin
      for (const i in newResult) {
        newResult[i].value = Math.round(Math.random() * 100);
      }

      this.results = [...newResult];
      console.log('tick');
    }, 1500);


  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
  ngOnInit() {
  }




  public onSelect(event) {
    console.log(event);
  }



}
