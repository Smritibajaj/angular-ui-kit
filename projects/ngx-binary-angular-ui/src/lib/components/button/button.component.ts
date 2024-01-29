import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
  `,
})
export class ButtonComponent {}
