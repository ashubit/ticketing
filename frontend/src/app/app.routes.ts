import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadComponent: () => import('./search/search.component').then(m => m.SearchComponent) },
  { path: 'booking', loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent) },
  { path: 'offers', loadComponent: () => import('./offers/offers.component').then(m => m.OffersComponent) },
  { path: 'tickets', loadComponent: () => import('./tickets/tickets.component').then(m => m.TicketsComponent) },
  { path: 'buses', loadComponent: () => import('./buses/buses.component').then(m => m.BusesComponent) },
];
