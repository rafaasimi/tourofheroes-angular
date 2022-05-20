import { Component, OnInit } from '@angular/core';
import IHero from 'src/app/models/heroes.model';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
import getCurrentDateAndTime from 'src/app/utils/getCurrentDateAndTime';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroesList: IHero[] = [];
  selectedHero?: IHero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`[${getCurrentDateAndTime()}] - The hero "${hero.name} (${hero.id})" has been selected.`)

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
