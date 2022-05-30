import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId === 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as IHero;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    }
  }

  updateHero(): void {
    this.heroService
      .updateHero(this.hero)
      .subscribe(() => this.returnPreviousPage());
  }
  createHero() :void {
    this.heroService
      .createHero(this.hero)
      .subscribe(() => this.returnPreviousPage());
  }

  returnPreviousPage(): void {
    this.location.back();
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }
}
