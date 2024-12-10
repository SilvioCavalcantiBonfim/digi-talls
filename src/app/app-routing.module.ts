import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './pages/contact/contact.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FaqModule } from './pages/faq/faq.module';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contatos', icon: 'send-plane', position: 10 },
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'FAQ - Digi Responde',
      icon: 'question-answer',
      position: 9,
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', icon: 'home', position: 1 },
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    data: { title: 'Depoimentos', icon: 'megaphone', position: 2 },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContactModule, FaqModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
