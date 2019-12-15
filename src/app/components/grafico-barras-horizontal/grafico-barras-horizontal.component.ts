import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barras-horizontal',
  templateUrl: './grafico-barras-horizontal.component.html',
  styleUrls: ['./grafico-barras-horizontal.component.css']
})
export class GraficoBarrasHorizontalComponent implements OnInit {


  // Datos de prueba
  @Input() results: any[];

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


  constructor() {
  }


  ngOnInit() {
  }




  public onSelect(event) {
    console.log(event);
  }



}
