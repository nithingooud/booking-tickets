import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialSetupComponent } from './components/initial-setup/initial-setup.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TrainSelectionComponent } from './components/train-selection/train-selection.component';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { BookingCompletedComponent } from './components/booking-completed/booking-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialSetupComponent,
    PdetailsComponent,
    TrainSelectionComponent,
    BookingCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
