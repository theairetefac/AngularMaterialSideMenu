import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html'
})
export class PageTwoComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
}