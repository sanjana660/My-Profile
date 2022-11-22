import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { HobbiesComponent } from './Pages/hobbies/hobbies.component';
import { HomeComponent } from './Pages/home/home.component';
import { SkillsComponent } from './Pages/skills/skills.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
