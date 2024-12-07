import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';



@NgModule({
  declarations: [
    FooterLogoComponent,
    HeaderLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterLogoComponent, HeaderLogoComponent]
})
export class LogoModule { }
