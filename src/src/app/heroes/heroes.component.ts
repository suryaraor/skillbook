import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, skill:string): void {
    name = name.trim();
    skill = skill.trim();
    var points = 1;
    if (!name) { return; }
    this.heroService.addHero({ name, skill, points } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  addPoint(hero: Hero): void {
   hero.points = hero.points+1;
    this.heroService.updateHero(hero).subscribe();
  }
  deletePoint(hero: Hero): void {
    hero.points = hero.points-1;
    if( hero.points <0)
    {
       hero.points = 0;
    }
    this.heroService.updateHero(hero).subscribe();
  }

  searchSkill(term:string): void {
    this.heroService.searchSkill(term)
    .subscribe(heroes => this.heroes = heroes);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/