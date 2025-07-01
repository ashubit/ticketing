import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent {
  buses = [
        { id: 1, bus: 'Kalpna Travels', description: 'Confirmed' },
        { id: 2, bus: 'VIMO', description: 'Pending' },
        // Add more sample tickets as needed
    ];
}
