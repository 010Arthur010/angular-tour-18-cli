import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetailComponent], // Corrected syntax
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
  





  // @Output() akuAdalahHeroes = new EventEmitter<string>();
  // @Output() akuAdalahJudul = new EventEmitter<string>();
  // judul: string = 'Judul';

  // methodTulisHeroes() {
  //   // console.log(this.hero.name);
  //   this.akuAdalahHeroes.emit(this.hero.name);
  // }

  // methodTulisJudul() {
  //   // console.log(this.judul);
  //   this.akuAdalahJudul.emit(this.judul);
  // }

