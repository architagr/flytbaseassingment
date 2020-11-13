import { Component, Input } from '@angular/core';
import { Box } from './../../models/box.model';

@Component({
  selector: 'flytbase-movable-box',
  templateUrl: './movable-box.component.html',
  styleUrls: ['./movable-box.component.css']
})
export class MovableBoxComponent  {
  private _box: Box;
  @Input('BoxData')
  set BoxData(value: Box) {
    this._box = value;
  }
  get BoxData(): Box {
    return this._box;
  }
}
