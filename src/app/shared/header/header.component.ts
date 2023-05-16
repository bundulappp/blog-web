import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('displayMobNavLinks', [
      state(
        'start',
        style({
          right: '-100%',
        })
      ),
      state(
        'end',
        style({
          right: '0%',
        })
      ),
      transition('start <=> end', [animate('.5s')]),
    ]),
  ],
})
export class HeaderComponent {
  mobNavLinksState = 'start';

  constructor(private router: Router) {}
  toggleMobNavLinks(): void {
    this.mobNavLinksState === 'start'
      ? (this.mobNavLinksState = 'end')
      : (this.mobNavLinksState = 'start');
  }
}
