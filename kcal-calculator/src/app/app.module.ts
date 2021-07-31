import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { KcalItemsComponent } from './components/kcal-items/kcal-items.component';
import { KcalAverageComponent } from './components/kcal-average/kcal-average.component';
import { KcalItemComponent } from './components/kcal-item/kcal-item.component';
import { AddKcalitemComponent } from './components/add-kcalitem/add-kcalitem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KcalItemsComponent,
    KcalAverageComponent,
    KcalItemComponent,
    AddKcalitemComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
