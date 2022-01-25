import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-on-image',
  templateUrl: './text-on-image.component.html',
  styleUrls: ['./text-on-image.component.scss']
})
export class TextOnImageComponent implements OnInit {
  @Input() mediaPath = "https://picsum.photos/200"
  constructor() { }

  ngOnInit(): void {
  }

}
