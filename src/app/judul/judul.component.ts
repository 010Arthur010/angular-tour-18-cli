import { Component, Input } from '@angular/core';

@Component({
  selector: 'judul',
  standalone: true,
  imports: [],
  templateUrl: './judul.component.html',
  styleUrl: './judul.component.css',
})
export class JudulComponent {
  @Input() nama: string = 'Denny';
  @Input() dataForm: string = '';
  @Input() tag: string = '(Default) Hero anda adalah : ';
}
