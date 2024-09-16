import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent,FormsModule]
})
export class AppComponent {
  title = 'codepulse';
}
