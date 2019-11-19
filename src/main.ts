import 'zone.js/dist/zone';  // Included with Angular CLI.
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app.module';

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Component } from '@angular/core';

//import { AppComponent } from './app.component';
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

// component : view + mvc
@Component({
  selector: 'app-heroes',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
    new Hero(25, 'Megabrain'),
    new Hero(30, 'BlueBagels'),
    new Hero(35, 'MightyDonut'),
  ];
  myHero = this.heroes[0];
}

// module
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);