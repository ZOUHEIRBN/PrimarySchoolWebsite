import { Component, Input, OnInit } from '@angular/core';
import { SchoolEvent } from 'src/app/models/Event';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() school_event:SchoolEvent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.school_event)
  }

}
