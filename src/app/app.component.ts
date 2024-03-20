import { Component } from '@angular/core';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';
import { FooterComponent } from './layouts/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unimacts';
}