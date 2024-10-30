import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgForOf } from '@angular/common';
import {Hero} from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [UpperCasePipe, FormsModule, NgForOf, NgIf, HeroDetailComponent],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}