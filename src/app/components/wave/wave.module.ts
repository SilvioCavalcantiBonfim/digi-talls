import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaveComponent } from './wave.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WaveComponent],
  imports: [CommonModule, RouterModule],
  exports: [WaveComponent],
})
export class WaveModule {}
