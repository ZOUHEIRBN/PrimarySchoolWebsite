import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() mediaPath = '';
  @Input() mediaType = 'image';
  constructor() { }

  ngOnInit(): void {
  }

}
