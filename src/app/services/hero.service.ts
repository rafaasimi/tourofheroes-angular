import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mocks/mock-heroes';
import IHero from '../models/heroes.model';
import getCurrentDateAndTime from '../utils/getCurrentDateAndTime';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);

    this.messageService.add(`[${getCurrentDateAndTime()}] - Hero list loaded.`);

    return heroes;
  }
}
