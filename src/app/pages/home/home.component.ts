import { Component } from '@angular/core';
import { WaveService } from 'src/app/services/wave.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'dt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('1s')]),
      transition('visible => hidden', [animate('1s')]),
    ]),
  ],
})
export class HomeComponent {
  protected wavePath$ = this.waveService.wavePath$;
  protected images = ['/assets/slide1.png', '/assets/slide2.png'];
  protected currentIndex = 0;
  private subscription!: Subscription;

  constructor(private waveService: WaveService) {
    this.startCarousel();
  }

  startCarousel(): void {
    this.subscription = interval(3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
