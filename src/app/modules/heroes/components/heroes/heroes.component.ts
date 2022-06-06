import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import IHero from 'src/app/core/models/heroes.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  tableDisplayedColumns: string[] = ['id', 'name', 'actions'];
  heroesList: IHero[] = [];

  constructor(private heroService: HeroService, private dialog: MatDialog) {}

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

  deleteHero(hero: IHero): void {
    // Criação da caixa de dialogo de confirmação de exclusão
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      contentText: `Delete '${hero.name}'?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.deleteHero(hero).subscribe(() => {
          // Filtra os dados, sem precisar fazer mais uma chamada de getHeroes()
          // this.heroesList = this.heroesList.filter((h) => h !== hero);

          // Faz novamente uma chamada de getHeroes
          // Recomendado para sistemas onde várias pessoas mexem
          this.getHeroes();
        });
      }
    });
  }

  onSelected(hero: IHero): void {
    this.deleteHero(hero);
  }
}
