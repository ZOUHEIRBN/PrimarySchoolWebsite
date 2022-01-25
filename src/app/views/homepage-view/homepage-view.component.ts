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
    },{
      id:"",
      title: "",
      description: "",
      date:new Date(),
      mediaType:"image",
      mediaPath: "https://random.imagecdn.app/500/400"
    },{
      id:"",
      title: "",
      description: "",
      date:new Date(),
      mediaType:"image",
      mediaPath: "https://random.imagecdn.app/500/400"
    }
  ]

  imageOptions = ["https://picsum.photos/500/400", "https://picsum.photos/500/500?grayscale", "https://random.imagecdn.app/500/600"]

  constructor() { }

  ngOnInit(): void {
  }

}
