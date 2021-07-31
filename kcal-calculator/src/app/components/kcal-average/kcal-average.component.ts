import { Component, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { KcalAverage } from 'src/app/models/KcalAverage';

@Component({
  selector: 'app-kcal-average',
  templateUrl: './kcal-average.component.html',
  styleUrls: ['./kcal-average.component.css']
})
export class KcalAverageComponent implements OnInit {
  tableHeaders: string[] = ['year','month', 'average'];
  @Input() kcalDataSource : MatTableDataSource<KcalAverage>;

  constructor() { }

  ngOnInit(): void{
  }
}
