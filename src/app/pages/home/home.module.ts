import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from "../../components/header/header.module";
import { LogoModule } from "../../components/logo/logo.module";
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent, TestimonialsComponent],
  imports: [CommonModule, HeaderModule, LogoModule, BrowserModule, BrowserAnimationsModule],
  exports: [HomeComponent, TestimonialsComponent],
})
export class HomeModule {}
