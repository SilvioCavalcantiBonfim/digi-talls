import { Component } from '@angular/core';

@Component({
  selector: 'dt-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  protected searchValue: string = '';
}
