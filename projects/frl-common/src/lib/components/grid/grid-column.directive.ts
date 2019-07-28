import { Directive, Input, OnInit } from '@angular/core';
import { GridComponent } from './grid.component';

@Directive({
  selector: 'frl-grid-column'
})
export class GridColumnDirective implements OnInit {
  @Input() title: string;
  @Input() boundProperty: string;

  constructor(private parentGrid: GridComponent) { }

  ngOnInit(): void {
    this.parentGrid.addColumn(this);
  }

}
