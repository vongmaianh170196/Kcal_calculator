import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { KcalAverage } from '../../models/KcalAverage';
import {KcalItem} from '../../models/KcalItem';
import { KcalItemService } from '../../services/kcal-item.service';

@Component({
  selector: 'app-kcal-items',
  templateUrl: './kcal-items.component.html',
  styleUrls: ['./kcal-items.component.css']
})
export class KcalItemsComponent implements OnInit, AfterViewInit {
  itemsDataSource = new MatTableDataSource<KcalItem>();
  kcalDataSource = new MatTableDataSource<KcalAverage>();

  kcalItems: KcalItem[] = [];

  subsctiption: Subscription;

  constructor(private kcalItemService: KcalItemService) { }

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  
  ngOnInit(): void{
    this.kcalItemService.getKcalByDay().subscribe(results => {
      this.kcalItems = results.map(element => {
        element.date = new Date(element.date).toLocaleDateString(); 
        return element;
      })      
      this.setDataTable();      
      this.ngAfterViewInit();
    });
    
  }
  ngAfterViewInit() {
    this.itemsDataSource.paginator = this.paginator;
  }
  ngOnDestroy(){
    this.subsctiption.unsubscribe();
  }

  addItem(item: KcalItem){
    var existed = this.kcalItems.findIndex(existed => item.date == existed.date);
    item.date = this.formatDate(item.date);
    if(existed > -1){
      item.id = this.kcalItems[existed].id;
      item.kcal = this.kcalItems[existed].kcal + item.kcal;
      this.kcalItemService.updateKcalItem(item).subscribe(updated => {
        this.kcalItems.map(existed => {
          if(existed.id == updated.id){ 
            updated.date = new Date(updated.date).toLocaleDateString();
            return Object.assign(existed, updated);
          }
        })
        this.setDataTable();
      });
      
    }
    else{
      this.kcalItemService.addKcalItem(item).subscribe(newItem => {
        newItem.date = new Date(newItem.date).toLocaleDateString();
        this.kcalItems.unshift(newItem)
        this.setDataTable();
      });
    }
    
  }

  setKcalByMonth(kcalItems: KcalItem[]): KcalAverage[]{    
    var kcalAverage:KcalAverage[] = [];
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
      kcalAverage.push(obj);
    }
    return kcalAverage;
  }

  setDataTable():void{
    this.kcalItems = this.kcalItems.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date)
    })
    this.itemsDataSource.data = this.kcalItems;
    this.kcalDataSource.data = this.setKcalByMonth(this.kcalItems);
    
    this.itemsDataSource._updateChangeSubscription();
    this.kcalDataSource._updateChangeSubscription();
  }
  getMonth(month:string): string{
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[parseInt(month)]
  }

  formatDate(date:string): string{
    var gmt = new Date().getTimezoneOffset() / 60;
    return new Date(date + "GMT"+ gmt + "00").toISOString().split("T")[0];
  }
}
