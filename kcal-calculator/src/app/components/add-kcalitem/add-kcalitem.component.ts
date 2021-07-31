import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KcalItem } from 'src/app/models/KcalItem';

@Component({
  selector: 'app-add-kcalitem',
  templateUrl: './add-kcalitem.component.html',
  styleUrls: ['./add-kcalitem.component.css']
})
export class AddKcalitemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<KcalItem> = new EventEmitter();
  name: string;
  weight: number;
  kcal: number;
  date: string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.weight || !this.kcal || !this.date) {
      alert("Please fill in empty fields");
    }
    else if (!(/[a-zA-Z]/.test(this.name))) {
      alert("Name field only accpets character from A-Z");
    }
    else {

      const newKcal = {
        kcal: this.kcal * this.weight / 100,
        date: new Date(this.date).toLocaleDateString()
      }
      this.onAddItem.emit(newKcal);
      this.name = '';
      this.weight = 0;
      this.kcal = 0;
      this.date = '';
    }

  }
}
