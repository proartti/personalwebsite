import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { PhrasesComponent } from './home/phrases/phrases.component';
import { SkillstatsComponent } from './home/skillstats/skillstats.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsetComponent } from './home/skillstats/skillset.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PhrasesComponent,
    SkillstatsComponent,
    ProjectsComponent,
    SkillsetComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
