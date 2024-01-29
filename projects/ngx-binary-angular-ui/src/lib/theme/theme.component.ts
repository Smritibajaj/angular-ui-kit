// projects/my-custom-library/src/lib/theme/theme.component.ts

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-theme',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation to apply styles globally
  styles: [`
    /* Define your custom styles here using CSS variables */
    :host {
      --primary-color: #00796b;
      --accent-color: #009688;
    }

    /* Add more styles as needed */
  `],
})
export class ThemeComponent {}
