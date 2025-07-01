import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { formatDate } from '../../utils/date.utils';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    CommonModule,
    ButtonComponent,
    LoaderComponent,
    ModalComponent
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  isLoading = false;
  isBookingDisabled = false;
  today = formatDate(new Date());

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ModalComponent, {
      data: { title: 'Booking Confirmation' }
    });
  }
}
