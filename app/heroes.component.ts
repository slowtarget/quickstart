import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {
  ngOnInit() {this.getHeroes();};
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero) { this.selectedHero = hero; };
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  getHeroes() {
      this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  gotoDetail() {
      this._router.navigate(['Hero', { id: this.selectedHero.id }]);
    }
  }
