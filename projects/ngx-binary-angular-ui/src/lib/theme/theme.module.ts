// projects/my-custom-library/src/lib/theme/theme.module.ts

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    // Add other Angular Material modules that you want to include in the theme
  ],
})
export class CustomThemeModule {}
