import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { KcalItem } from 'src/app/models/KcalItem';

@Component({
  selector: 'app-kcal-item',
  templateUrl: './kcal-item.component.html',
  styleUrls: ['./kcal-item.component.css']
})
export class KcalItemComponent implements OnInit {
  tableHeaders: string[] = ['date','kcal'];
  @Input() itemsDataSource : MatTableDataSource<KcalItem>;

  constructor() { }

  ngOnInit() {
  }

}
