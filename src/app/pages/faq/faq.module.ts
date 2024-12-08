import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'src/app/components/accordion/accordion.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
