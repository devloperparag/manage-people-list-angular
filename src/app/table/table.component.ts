import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  total = 0;
  row = [
    {
      id: '',
      firstName: 'Addison',
      lastName: 'Brady',
    },
    {
      id: '',
      firstName: 'Baron',
      lastName: 'Carson',
    },
    {
      id: '',
      firstName: 'Carter',
      lastName: 'Vandari',
    },
    {
      id: '',
      firstName: 'Franklin',
      lastName: 'Coleman',
    },
    {
      id: '',
      firstName: 'Carver',
      lastName: 'Davis',
    },
    {
      id: '',
      firstName: 'Harris',
      lastName: 'Finley',
    },
  ];
  constructor() {}

  ngOnInit() {}

  addTable() {
    console.log(this.row.length);
    const obj = {
      id: '',
      firstName: '',
      lastName: '',
    };
    this.row.push(obj);
    this.row[this.row.length - 1].id = this.row.length.toString();
  }

  deleteRow(x) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }
}
