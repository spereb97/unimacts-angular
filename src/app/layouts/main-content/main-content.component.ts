import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
