import { Component, OnInit } from '@angular/core';
import { WorkOrderListItem } from '../work-order-list/work-order-list-item';

@Component({
  selector: 'app-work-orders-calendar-page',
  templateUrl: './work-orders-calendar-page.component.html',
  styleUrls: ['./work-orders-calendar-page.component.css']
})
export class WorkOrdersCalendarPageComponent implements OnInit {

  calendarOptions:Object = {
    // height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventClick: (calEvent, jsEvent, view) => {
      console.log(this);
      this.selectWorkOrder(calEvent.id);
    },
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedWorkOrderId: number;

  constructor() { }

  ngOnInit() {
  }

  selectWorkOrder(id: number): void {
    this.selectedWorkOrderId = id;
    this.isDetailVisible = true;
  }

  toggleCreateVisibility(): void {
    this.isCreateVisible = !this.isCreateVisible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
