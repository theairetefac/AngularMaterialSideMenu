import { trigger, state, style, transition, animate} from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'width': '56px'
    })
  ),
  state('open',
    style({
      'width': '238px'
    })
  ),
  transition('close => open', animate('300ms ease-in')),
  transition('open => close', animate('350ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state('full',
    style({
      'margin-left': '0px'
    })
  ),
  state('close',
    style({
      'margin-left': '80px'
    })
  ),
  state('open',
    style({
      'margin-left': '262px'
    })
  ),
  transition('close => open', animate('300ms ease-in')),
  transition('open => close', animate('450ms ease-in')),
]);

