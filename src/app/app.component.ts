import { Component, Renderer2 } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (event.url === '/') {
            this.renderer.addClass(document.body, 'isHome');
          } else {
            this.renderer.removeClass(document.body, 'isHome');
          }
        }
      });

  }
}
