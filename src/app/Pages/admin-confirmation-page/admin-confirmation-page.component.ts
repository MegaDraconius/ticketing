import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, TranslateModule],
  templateUrl: './admin-confirmation-page.component.html',
  styleUrl: './admin-confirmation-page.component.scss',
})
export class AdminConfirmationPageComponent {
  router = inject(Router);

  comeBack() {
    this.router.navigate(['']);
  }
}
