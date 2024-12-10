import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaveService {
  private wavePathSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.generateWavePath(0));
  wavePath$: Observable<string> = this.wavePathSubject.asObservable();
  private waveOffset = 0;

  // Variáveis para controlar as alturas (amplitudes)
  private initialAmplitude = 60; // Inicialmente maior
  private decayRate = 0.001;    // Taxa de decaimento

  constructor() {
    this.animateWave();
  }

  private animateWave() {
    requestAnimationFrame(() => this.animateWave());
    this.waveOffset += 0.04;
    const newPath = this.generateWavePath(this.waveOffset);
    this.wavePathSubject.next(newPath);
  }

  private generateWavePath(offset: number): string {
    const points = [];
    const height = 250;
    const frequency = 0.005;
    const width = 1440;

    for (let i = 0; i <= width; i += 10) {
      // Aplicação de decaimento exponencial na amplitude
      const amplitude = this.initialAmplitude * Math.exp(-this.decayRate * (width - i));
      const y = height / 4 + amplitude * Math.sin((i * frequency) + offset);
      points.push(`${i},${y}`);
    }

    return `M${points[0]} L${points.slice(1).join(' L')} V${height} H0 Z`;
  }
}
