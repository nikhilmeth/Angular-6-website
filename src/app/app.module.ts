import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { AnimationComponent } from './animation/animation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { FullscreenHeroComponent } from './fullscreen-hero/fullscreen-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExpertiseComponent,
    ProjectsComponent,
    FooterComponent,
    FormComponent,
    AnimationComponent,
    NavbarComponent,
    FullscreenHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
