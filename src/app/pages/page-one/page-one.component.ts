import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
}
