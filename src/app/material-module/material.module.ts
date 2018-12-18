import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule { }
