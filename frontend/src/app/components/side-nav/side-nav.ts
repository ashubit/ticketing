import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav {

}
