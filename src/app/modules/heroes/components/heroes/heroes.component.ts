import { Component, OnInit } from '@angular/core';
import IHero from 'src/app/core/models/heroes.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  tableDisplayedColumns: string[] = ['id', 'name']
  heroesList: IHero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroesList = heroes));

    // Outra forma de criar um Observable (Next, Error, Complete)
    // this.heroService.getHeroes().subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
  }
}
