import { Component, OnInit, Input } from '@angular/core';
import { GridColumnDirective } from './grid-column.directive';

export interface GridRow {
  title: string;
  boundProperty: string;
}

@Component({
  selector: 'frl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  rowData: GridRow[] = [];
  @Input() data: any[];

  constructor() {}

  ngOnInit() {}

  addColumn(row: GridColumnDirective) {
    this.rowData.push({
      title: row.title,
      boundProperty: row.boundProperty,
    });
  }
}
