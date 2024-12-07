import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './pages/contact/contact.module';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contatos', icon: 'send-plane', position: 10 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContactModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
