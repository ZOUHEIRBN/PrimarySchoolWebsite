import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOnImageComponent } from './text-on-image.component';

describe('TextOnImageComponent', () => {
  let component: TextOnImageComponent;
  let fixture: ComponentFixture<TextOnImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOnImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
