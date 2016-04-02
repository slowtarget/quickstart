import { Component }          from 'angular2/core';
import { HeroService }        from './hero.service';
import { HeroesComponent }    from './heroes.component';
import { HeroComponent }      from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      HeroService
    ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    name: 'Hero',
    component: HeroComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
