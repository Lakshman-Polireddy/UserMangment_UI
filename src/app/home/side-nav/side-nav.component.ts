import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  [x: string]: any;

  @Output() closeSideNav = new EventEmitter();

  onToggleClose() {
    this.closeSideNav.emit();
  }
}
