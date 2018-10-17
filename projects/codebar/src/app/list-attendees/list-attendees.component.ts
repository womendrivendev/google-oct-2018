import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-list-attendees',
  templateUrl: './list-attendees.component.html',
  styleUrls: ['./list-attendees.component.css']
})
export class ListAttendeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generateList() {
      let checkboxes = document.getElementById('rsvp-table').querySelectorAll('.mdl-checkbox__input');
      for (let i = 0; i < checkboxes.length; i++) {
          console.log(checkboxes[i].parentElement.dataset.name)
      }
  }
}
