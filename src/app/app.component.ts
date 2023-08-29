import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.isHomePage = this.route.snapshot.routeConfig?.path === 'home';
  }
}
