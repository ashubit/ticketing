import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent) },
  { path: 'booking', loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent) },
  { path: 'offers', loadComponent: () => import('./pages/offers/offers.component').then(m => m.OffersComponent) },
  { path: 'tickets', loadComponent: () => import('./pages/tickets/tickets.component').then(m => m.TicketsComponent) },
  { path: 'buses', loadComponent: () => import('./pages/buses/buses.component').then(m => m.BusesComponent) },
];
