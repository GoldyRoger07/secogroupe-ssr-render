import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-alert',
  imports: [],
  templateUrl: './form-alert.html',
  styleUrl: './form-alert.css',
})
export class FormAlert {
  @Input() type: 'success' | 'error' = 'success';
  @Input() message = '';
  @Input() visible = false;
}
