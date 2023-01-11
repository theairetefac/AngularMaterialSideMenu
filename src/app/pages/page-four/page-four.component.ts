import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html'
})
export class PageFourComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
}
