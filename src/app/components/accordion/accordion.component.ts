import { Component, Input } from '@angular/core';
import { IAccordion } from './models/Accordion.interface';
import { BehaviorSubject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'dt-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed => open', [animate('0.3s ease-in-out')]),
      transition('open => closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class AccordionComponent {
  @Input() accordion!: IAccordion;
  private stateSubject = new BehaviorSubject(false);
  protected state$ = this.stateSubject.asObservable();

  protected toogle() {
    const state = this.stateSubject.value;
    this.stateSubject.next(!state);
  }
}
