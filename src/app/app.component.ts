import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MapingComponent } from './maping/maping.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MapingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sujith';
}
