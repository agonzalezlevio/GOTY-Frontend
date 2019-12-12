import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarrasHorizontalComponent } from './grafico-barras-horizontal/grafico-barras-horizontal.component';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarrasHorizontalComponent
  ],
  imports: [
    // Directivas propias de Angular
    CommonModule,
    // Navegación
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  // Para poder utilizarlo fuera
  exports: [
    NavbarComponent,
    GraficoBarrasHorizontalComponent
  ]
})
export class ComponentsModule { }
