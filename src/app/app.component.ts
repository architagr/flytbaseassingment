import { Component, HostListener } from '@angular/core';
import { Box } from './models/box.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBox: Box;
  step: number = 2;
  bindEvents: boolean = true
  boxes: Array<Box> = new Array<Box>();
  maxBoxId: number = 0;
  keyEventsChangeFn = this.onKeyDown.bind(this)
  constructor() {
    this.addBox();
    this.selectedBox = this.boxes[0];
    this.keyEventsChange(true);
  }
  addBox() {
    this.maxBoxId++;
    this.boxes.push({ Id: this.maxBoxId, Top: 0, Left: 0, IsSelected: false });
    this.selectedBox = this.boxes.find(x => x.Id == this.maxBoxId)
    this.markSelectedBox();
  }
  boxSelectionChange(box: Box) {
    this.selectedBox = box;
    this.markSelectedBox();
  }
  keyEventsChange(event: boolean) {
    this.bindEvents = event;
    document.removeEventListener('keydown', this.keyEventsChangeFn, true);
    if (event) {
      document.addEventListener('keydown', this.keyEventsChangeFn, true);
    }
  }
  private markSelectedBox() {
    this.boxes.forEach(x => x.IsSelected = this.selectedBox.Id === x.Id);
  }
  @HostListener('document:keydown.delete')
  deleteButton() {
    this.boxes = this.boxes.filter(x => x.Id !== this.selectedBox.Id)
    this.selectedBox = null
  }
  private onKeyDown(event: KeyboardEvent) {
    if (this.selectedBox && this.selectedBox.Id > 0) {

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
          if (this.selectedBox.Top > this.step)
            this.selectedBox.Top -= this.step;
          break;
        case 'ArrowDown':
        case 's':
          if (this.selectedBox.Top < (480 - this.step))
            this.selectedBox.Top += this.step;
          break;
        case 'ArrowLeft':
        case 'a':
          if (this.selectedBox.Left > this.step)
            this.selectedBox.Left -= this.step;
          break;
        case 'ArrowRight':
        case 'd':
          if (this.selectedBox.Left < (480 - this.step))
            this.selectedBox.Left += this.step;
          break;
      }
    }
  }
}
