import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public games: any[];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('goty').valueChanges().pipe(map( (resp: Game[]) => {
      // Reestructurar la respuesta al formato idea para la gráfica
      return resp.map( ({ name, votos }) => ({name, value: votos}));
    })).subscribe( games => {
      this.games = games;
    });
  }

}
