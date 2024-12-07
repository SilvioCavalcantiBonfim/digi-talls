import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';



@NgModule({
  declarations: [
    FooterLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterLogoComponent]
})
export class LogoModule { }
