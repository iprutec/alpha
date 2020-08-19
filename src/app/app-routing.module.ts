import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ApplyComponent } from './apply/apply.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'our-team', component: OurTeamComponent},
  { path: 'apply', component: ApplyComponent},
  { path: 'consulting', component: ConsultingComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OurTeamComponent, ApplyComponent, ConsultingComponent, TestimonialsComponent, NewsletterComponent, ContactComponent]