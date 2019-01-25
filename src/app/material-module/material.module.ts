import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatSidenavModule} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule { }
