// projects/my-custom-library/src/lib/custom-library.module.ts

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import 'ngx-binary-angular-ui/src/lib/component/button';
@NgModule({
  declarations: [],
  imports: [MatButtonModule],
  exports: [MatButtonModule],
})
export class CustomLibraryModule {}
