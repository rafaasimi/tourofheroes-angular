import { Component, OnInit } from '@angular/core';
import IHero from 'src/app/core/models/heroes.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes.slice(1,5))
  }
}
