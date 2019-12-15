import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game.interface';
import { of } from 'rxjs/internal/observable/of';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];


  constructor(private httpClient: HttpClient) { }


  public getNominados() {

    if (this.games.length > 0) {
      // No existen juegos
      return of(this.games);
    } else {
      // Existen juegos
      const URL = environment.url + '/api/goty';
      return this.httpClient.get<Game[]>(URL).pipe(
        tap(games => this.games = games)
      );
    }

  }

  public votarJuego(id: string) {
    const URL = environment.url + '/api/goty/' + id;
    return this.httpClient.post(URL, {}).pipe(
      catchError( errorResp => {
        return of(errorResp.error);
      })
    );
  }


}
