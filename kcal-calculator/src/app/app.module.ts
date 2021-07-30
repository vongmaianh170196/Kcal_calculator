import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { KcalItemsComponent } from './components/kcal-items/kcal-items.component';
import { KcalAverageComponent } from './components/kcal-average/kcal-average.component';
import { KcalItemComponent } from './components/kcal-item/kcal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    KcalItemsComponent,
    KcalAverageComponent,
    KcalItemComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
