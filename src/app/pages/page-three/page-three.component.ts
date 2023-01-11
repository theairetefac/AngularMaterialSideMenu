import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html'
})
export class PageThreeComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
}
