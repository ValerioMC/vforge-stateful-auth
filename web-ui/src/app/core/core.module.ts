import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { coreRoutes } from './core.route';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    [ RouterModule.forRoot(coreRoutes) ],
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoginComponent,
    SuccessComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule {
}
