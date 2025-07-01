import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
}
