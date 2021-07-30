import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { KcalAverage } from '../../models/KcalAverage';
import {KcalItem} from '../../models/KcalItem';
import { KcalItemService } from '../../services/kcal-item.service';

@Component({
  selector: 'app-kcal-items',
  templateUrl: './kcal-items.component.html',
  styleUrls: ['./kcal-items.component.css']
})
export class KcalItemsComponent implements OnInit, AfterViewInit {
  tableHeaders: string[] = ['date','kcal'];
  itemsDataSource = new MatTableDataSource<KcalItem>();

  kcalAverage:KcalAverage[] = [];
  kcalDataSource = new MatTableDataSource<KcalAverage>();

  constructor(private kcalItemService: KcalItemService) { }

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  
  ngOnInit(): void{
    this.kcalItemService.getKcalByDay().subscribe(results => {
      this.itemsDataSource = new MatTableDataSource<KcalItem>(results)
      this.kcalDataSource = new MatTableDataSource<KcalAverage>(this.setKcalByMonth(results));
      this.ngAfterViewInit();
    });  
    
  }
  ngAfterViewInit() {
    this.itemsDataSource.paginator = this.paginator;
  }

  setKcalByMonth(kcalItems: KcalItem[]): KcalAverage[]{
    var avObj = kcalItems.reduce((avr, currentVal) => {    
      var time = new Date(currentVal.date).getMonth() + "-" + new Date(currentVal.date).getFullYear();     
      if(!avr[time]){        
        avr[time] = {kcal: 0, count : 0};    
      }    
      Object.assign(avr[time],  {kcal: avr[time]["kcal"] + currentVal.kcal, count : avr[time]["count"] + 1})    
      return avr;    
    },{}) 
    var months = Object.keys(avObj);
    for(var i = 0; i< months.length; i++){
      let obj = {
        month: this.getMonth(months[i].split("-")[0]), 
        year: parseInt(months[i].split("-")[1]), 
        average: Math.round(avObj[months[i]]["kcal"] / avObj[months[i]]["count"])
      };    
      this.kcalAverage.push(obj);
    }
    return this.kcalAverage;
  }
  getMonth(month:string): string{
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[parseInt(month)]
  }
}
