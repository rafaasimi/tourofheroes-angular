import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import IHero from 'src/app/core/models/heroes.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: IHero;
  isEditing: boolean = false;

  form = this.fb.group({
    idHero: [{ value: '', disabled: true }],
    nameHero: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId !== 'new') {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getHero(id).subscribe((hero) => {
        this.hero = hero;

        this.form.controls['idHero'].setValue(hero.id);
        this.form.controls['nameHero'].setValue(hero.name);
      });
    }
  }

  updateHero(): void {
    const { value, valid } = this.form;

    if (valid) {
      const hero: IHero = {
        id: this.hero.id,
        name: value.nameHero,
      };

      this.heroService
        .updateHero(hero)
        .subscribe(() => this.returnPreviousPage());
    } else {
      this.showErrorMessage();
    }
  }

  createHero(): void {
    const { value, valid } = this.form;

    if (valid) {
      const hero: IHero = {
        name: value.name,
      } as IHero;

      this.heroService
        .createHero(hero)
        .subscribe(() => this.returnPreviousPage());
    } else {
      this.showErrorMessage();
    }
  }

  returnPreviousPage(): void {
    this.location.back();
  }

  private showErrorMessage(): void {
    this.snackBar.open('Please, check the errors found.', 'OK', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}
