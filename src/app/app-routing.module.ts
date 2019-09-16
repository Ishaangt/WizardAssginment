import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomeComponent } from './home/home.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"personal-details", component: PersonalDetailsComponent},
  {path:"contact-details", component: ContactDetailsComponent},
  {path:"skill-details", component: SkillsComponent},
  {path:"work-details", component: WorkExperienceComponent},
  {path:"finished", component: WizardFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }