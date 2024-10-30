import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { JudulComponent } from './judul/judul.component';
import { MessagesComponent } from './messages/messages.component'; 
import { EventEmitter } from 'stream';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, JudulComponent, MessagesComponent, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  // propertyNama: string = 'blablaproperty';
  // example: string = `"david"`;
  // valueEmitHeroes: string = '';
  // valueEmitJudul: string = '';
  // methodTangkapHeroes(heroName: string) {
  //   // console.log(heroName);
  //   this.valueEmitHeroes = heroName;
  // }

  // methodTangkapJudul(judul: string) {
  //   // console.log(judul);
  //   this.valueEmitJudul = judul;
  // }
}
