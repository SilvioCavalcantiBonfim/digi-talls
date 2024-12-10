import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'dt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  title = 'Digi Talls';
  private renderSubject = new BehaviorSubject(true);
  protected render$ = this.renderSubject.asObservable();

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.renderSubject.next(!event.urlAfterRedirects.includes('home'));
      });
  }
}
