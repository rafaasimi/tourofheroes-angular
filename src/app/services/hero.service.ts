import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import IHero from '../models/heroes.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): IHero[] {
    return HEROES
  };
}
