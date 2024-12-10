import { Component } from '@angular/core';
import { WaveService } from 'src/app/services/wave.service';

@Component({
  selector: 'dt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected wavePath$ = this.waveService.wavePath$;
  constructor(private waveService: WaveService){}
}
