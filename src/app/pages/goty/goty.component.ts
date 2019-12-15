import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getNominados().subscribe((games: Game[]) => {
        this.games = games;
    });
  }


  public votarJuego(game: Game) {
    this.gameService.votarJuego(game.id).subscribe((resp: {ok: boolean, message: string})  => {
      if (resp.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Voto realizado!',
          text: resp.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: resp.message,
        });
      }

    });
  }

}
