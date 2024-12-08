import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'dt-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss'],
})
export class WaveComponent {
  wavePath: string;
  paths: { [key: string]: string } = {
    '/home':
      'M0,160L80,138.7C160,117,320,75,480,64C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
    '/contact':
      'M0 519.133L59.9167 530.281C119.833 542.27 239.667 563.303 359.5 530.281C479.333 495.997 599.167 407.657 719 395.668C838.833 384.52 958.667 451.827 1078.5 462.975C1198.33 474.964 1318.17 428.69 1378.08 407.026L1438 384.52V0H1378.08C1318.17 0 1198.33 0 1078.5 0C958.667 0 838.833 0 719 0C599.167 0 479.333 0 359.5 0C239.667 0 119.833 0 59.9167 0H0L0 519.133Z',
    '/faq':
      'M0 355.167L120 351.054C240 346.63 480 338.87 720 342.75C960 346.63 1200 363.703 1320 371.696L1440 380V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V355.167Z',
  };

  constructor(private router: Router) {
    this.wavePath = this.paths['/home'];
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => (event as any).urlAfterRedirects as string)
      )
      .subscribe((event) => {
        this.wavePath = this.paths[event] || this.paths['/home'];
      });
  }
}
