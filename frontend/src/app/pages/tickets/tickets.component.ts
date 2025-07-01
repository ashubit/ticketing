import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  tickets = [
    { id: 1, route: 'Delhi → Mumbai', date: '2025-07-01', status: 'Confirmed' },
    { id: 2, route: 'Bangalore → Chennai', date: '2025-07-05', status: 'Pending' },
    // Add more sample tickets as needed
  ];
}
