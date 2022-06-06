import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import IHero from 'src/app/core/models/heroes.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<IHero[]>;
  @Input() label: string = '';
  @Output() private selectedHero = new EventEmitter<IHero>();

  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term) => this.heroService.searchHero(term))
    );
  }

  searchHero(term: string): void {
    this.searchTerm.next(term);
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    this.searchTerm.next('');

    const hero: IHero = selectedItem.option.value;
    this.selectedHero.emit(hero);
  }
}
