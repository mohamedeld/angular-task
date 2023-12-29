import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';

import { Person } from 'src/app/types/person';

import { PageEvent } from 'src/app/types/pageEvent';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  checked: boolean = false;
  first: number = 0;

  rows: number = 10;
  tableData: Person[] = [
    {
      id: 1,
      firstName: 'احمد',
      lastName: 'محمود',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 30,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9mon',
        image: 'ticket image',
      },
    },
    {
      id: 2,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 40,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 1,
      firstName: 'احمد',
      lastName: 'محمود',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 30,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9mon',
        image: 'ticket image',
      },
    },
    {
      id: 2,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 40,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 1,
      firstName: 'احمد',
      lastName: 'محمود',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 30,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9mon',
        image: 'ticket image',
      },
    },
    {
      id: 2,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 40,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
    {
      id: 3,
      firstName: 'محمد',
      lastName: 'الغريب',
      image:
        'https://th.bing.com/th/id/OIP.50izdzoepKvFH50lgS1bsAHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7',
      phone: '12312312313',
      ticket: {
        number: 'C-101',
        price: 20,
        cinemaAddress: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleCount: 1,
        paidCount: 'مرة واحدة',
        title: 'number 1 pdf',
        type: 'PDF',
        lastPaid: '9 mon',
        image: 'ticket image',
      },
    },
  ];
  constructor(private tableDataService: TableDataService) {}
  ngOnInit(): void {
    this.tableDataService.fetchData().subscribe((jsonData) => {
      this.tableData = jsonData;
    });
  }
  sortByTicketPrice() {
    this.tableData.sort((a, b) => a.ticket.price - b.ticket.price);
  }

  onPageChange(event: PageEvent) {
    if (event.first !== undefined) {
      this.first = event.first;
    }
    if (event.rows !== undefined) {
      this.rows = event.rows;
    }
  }
}
