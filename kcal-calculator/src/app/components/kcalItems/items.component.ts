import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Item} from '../../models/KcalItem';
import { KcalItemService } from '../../services/kcal-item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  tableHeaders: string[] = ['date', 'kcal'];
  itemsDataSource = new MatTableDataSource<Item>();

  constructor(private kcalItemService: KcalItemService) { }

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.itemsDataSource.paginator = this.paginator;
  }
  ngOnInit(): void{
    this.kcalItemService.getKcalByDay().subscribe(results => this.itemsDataSource = new MatTableDataSource<Item>(results));
  }
}
