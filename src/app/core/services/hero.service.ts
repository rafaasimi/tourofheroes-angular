import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HEROES } from '../mocks/mock-heroes';
import IHero from '../models/heroes.model';
import getCurrentDateAndTime from '../utils/getCurrentDateAndTime';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<IHero[]> {
    // Consome os Herois do Mock
    // const heroes = of(HEROES);

    const heroes = this.http
      .get<IHero[]>(this.heroesUrl)
      .pipe(
        tap((heroes) =>
          this.messageLog(`Hero list loaded. (Size: ${heroes.length})`)
        )
      );

    // this.messageService.add(`[${getCurrentDateAndTime()}] - Hero list loaded.`);
    // this.messageLog('Hero list loaded.');

    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    // Consome os Herois do Mock
    // const hero = HEROES.find((hero) => hero.id === id)!;

    const hero = this.http
      .get<IHero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) =>
          this.messageLog(`Loaded the hero "${hero.name} (ID: ${hero.id})"`)
        )
      );

    // this.messageService.add(`Loaded the hero "${hero.name} (${hero.id})"`);
    // this.messageLog(`Loaded the hero "${hero.name} (${hero.id})"`);
    return hero;
  }

  private messageLog(message: string) {
    this.messageService.add(`[${getCurrentDateAndTime()}] - ${message}`);
  }
}
