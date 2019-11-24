/**
 * @module SharedModule
 * @description
 * This is the shared module of the application.
 * It contain the application related dependencies that can be shared across the applications
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
