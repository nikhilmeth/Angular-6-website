import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormComponent } from './form/form.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: '', redirectTo : 'fullscreen-hero', pathMatch : 'full' },
  { path: 'fullscreen-hero', component: AnimationComponent },
  { path: 'about', component: IntroComponent },
  { path: 'me', component: ExpertiseComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: FormComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
