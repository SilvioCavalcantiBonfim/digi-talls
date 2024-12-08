import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'src/app/components/accordion/accordion.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
