import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { PhrasesComponent } from './home/phrases/phrases.component';
import { SkillstatsComponent } from './home/skillstats/skillstats.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsetComponent } from './home/skillstats/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PhrasesComponent,
    SkillstatsComponent,
    ProjectsComponent,
    SkillsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
