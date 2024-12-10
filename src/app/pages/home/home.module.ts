import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from "../../components/header/header.module";
import { LogoModule } from "../../components/logo/logo.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HeaderModule, LogoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
