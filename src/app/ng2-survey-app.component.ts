import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { SettingsComponent } from './+settings';

@Component({
  moduleId: module.id,
  selector: 'ng2-survey-app-app',
  templateUrl: 'ng2-survey-app.component.html',
  styleUrls: ['ng2-survey-app.component.css'],
  directives: [MdToolbar, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/settings', component: SettingsComponent}
])
// FIXME: replace OnInit hack with useAsDefault
export class Ng2SurveyAppAppComponent implements OnInit {
  title: string = 'Survey Application';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }
}