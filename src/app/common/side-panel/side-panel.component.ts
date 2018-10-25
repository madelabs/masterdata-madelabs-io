import { Component, EventEmitter, Input, OnInit, Output, ElementRef } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(100%)'})),
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(200, style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SidePanelComponent implements OnInit {
  @Input() visible: boolean;
  @Input() name: string;
  @Output() onToggleVisibility = new EventEmitter<boolean>();

  constructor(el: ElementRef) { }

  ngOnInit() {
  }

  toggleVisibility(): void {
    // toggle
    this.visible = !this.visible;

    // emit
    this.onToggleVisibility.emit(this.visible);
  }
}
