import { Component, ViewChild, ElementRef } from '@angular/core';
import * as fromLinks from './core/items';
import { NavService } from './core/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  navItems  = fromLinks.NAV_LINKS


  constructor(
    private navService: NavService,
  ){}


  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
