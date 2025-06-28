import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {}
