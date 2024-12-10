import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from "./components/header/header.module";
import { WaveModule } from "./components/wave/wave.module";
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    AppRoutingModule,
    HeaderModule,
    WaveModule,
    HomeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
