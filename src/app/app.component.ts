import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { onMainContentChange, onSideNavChange, animateText } from './animations';
import {AuthService} from "./auth/auth.service";

interface IMenuLink {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange, onSideNavChange, animateText]
})
export class AppComponent {

  public isMenuOpened: boolean = false;
  public isTextVisible: boolean = false;
  public pages: Array<IMenuLink> = [
    { name: 'Главная', link: '', icon: 'home' },
    { name: 'Страница 2', link: 'page-2', icon: 'inbox' },
    { name: 'Страница 3', link: 'page-3', icon: 'star' },
    { name: 'Страница 4', link: 'page-4', icon: 'send' },
  ]
  public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    
  constructor( private matIconRegistry: MatIconRegistry, private breakpointObserver: BreakpointObserver, public authService: AuthService  ) {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
    
    this.isHandset.subscribe(isHandset => {
      this.isMenuOpened = !isHandset;

      setTimeout(() => {
        this.isTextVisible = this.isMenuOpened;
      }, 200)
    });
  }
  public toggleSidenav() {
    this.isMenuOpened = !this.isMenuOpened;

    setTimeout(() => {
      this.isTextVisible = this.isMenuOpened;
    }, 200)
  }
}