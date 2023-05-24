import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__content">
        <img
          src="assets/angular-logo.svg"
          alt="Angular Flights Logo"
          class="header__logo"
        />
        <nav class="menu">
          <a
            routerLink="/"
            class="menu__item"
            routerLinkActive="menu__item--active"
            >Home</a
          >
          <a
            routerLink="/flights"
            class="menu__item"
            routerLinkActive="menu__item--active"
            >Flights</a
          >
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
