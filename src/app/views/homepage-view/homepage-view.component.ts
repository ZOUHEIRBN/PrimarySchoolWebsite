import { Component, Input, OnInit } from '@angular/core';
import { SchoolEvent } from 'src/app/models/Event';

@Component({
  selector: 'homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.scss']
})
export class HomepageViewComponent implements OnInit {
  events:SchoolEvent[] = [
    {
      id:"",
      title: "",
      description: "",
      date:new Date(),
      mediaType:"image",
      mediaPath: "https://random.imagecdn.app/500/400"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
