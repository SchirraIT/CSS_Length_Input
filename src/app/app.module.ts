import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule, MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CssLengthInputComponent } from './css-length-input/css-length-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CssLengthInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatStepperModule,
    MatSliderModule,

    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
