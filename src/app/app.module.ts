import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [AppComponent, CommonModule,FormsModule, HeroesComponent, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
