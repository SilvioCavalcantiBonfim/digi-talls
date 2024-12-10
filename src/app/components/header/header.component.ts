import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IHeaderPath } from './models/Header.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'dt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  set isVisible(isVisible: boolean) {
    this.hidden = !isVisible;
    this.show = isVisible;
  }

  @HostBinding('class.digitalls-hidden') hidden = false;
  @HostBinding('class.digitalls-header') show = true;

  protected routes: IHeaderPath[] = [];
  @Input() inverse = false;
  @Input() logo = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routes = this.router.config
      .filter(
        (route) =>
          route.data &&
          route.data['title'] &&
          route.data['icon'] &&
          route.data['position']
      )
      .sort((routeA, routeB) => {
        return (
          (routeA.data ? routeA.data['position'] : Infinity) -
          (routeB.data ? routeB.data['position'] : Infinity)
        );
      })
      .map((route) => ({
        path: route.path || '',
        title: route.data ? route.data['title'] : '',
        icon: route.data ? route.data['icon'] : '',
      }));
  }
}
