import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css'],
})
export class CurrencySelectorComponent {

  @Input() currencies = [];
  @Output() onSelect = new EventEmitter<string>();
  onSelectEvent(c) {
    this.onSelect.emit(c);
  }
}
