import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { onMainContentChange, onSideNavChange } from './animations';
import { AuthService } from "./auth/auth.service";
import { ResponsiveService } from "./services/responsive.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange, onSideNavChange]
})
export class AppComponent {

  public isMenuOpened: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService,
    public responsiveService: ResponsiveService) {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
    responsiveService.isHandset.subscribe(isHandset => {
      this.isMenuOpened = !isHandset;
    });
  }

  public toggleSidenav() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}