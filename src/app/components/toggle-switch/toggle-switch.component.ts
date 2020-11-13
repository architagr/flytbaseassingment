import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'flytbase-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {
 @Input('keyEvents') 
 eventBindingChecked: boolean = true;
 @Output('keyEventsChange') eventBindingCheckedChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event){
    this.eventBindingChecked =    event.target.checked;
    this.eventBindingCheckedChange.emit(this.eventBindingChecked);
  }
}
