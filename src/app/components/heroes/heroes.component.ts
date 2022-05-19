import { Component, OnInit } from '@angular/core';
import IHero from 'src/app/models/heroes.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroesList: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroesList = this.heroService.getHeroes();
  }

}
