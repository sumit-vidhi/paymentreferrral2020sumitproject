import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
