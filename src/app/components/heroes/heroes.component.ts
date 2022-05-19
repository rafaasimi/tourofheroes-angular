import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mocks/mock-heroes';
import IHero from 'src/app/models/heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: IHero;
  heroesList = HEROES;
  selectedHero?: IHero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: IHero): void {
    this.selectedHero = hero
  }
}
