import { Component } from '@angular/core';

@Component({
  selector: 'dt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private readonly date: Date = new Date();

  get year(){
    return `Digitalls @ ${this.date.getFullYear()}. Todos os direitos reservados.`;
  }
}
