import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import EditorConfig from '../config-interface';
@Component({
  selector: 'app-editor-menu',
  templateUrl: './editor-menu.component.html',
  styleUrls: ['./editor-menu.component.less']
})
export class EditorMenuComponent implements OnInit {

  @Input() editorConfig: EditorConfig;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  enter = false;
  upload= false;
  constructor() {
    this.editorConfig = {
      file: false,
      mentionedNames: [],
      mentionedDates: [],
      colorPalette: ['#FF5630', '#000000', '#414141', '#36B37E',
                     '#6554C0', '#FF7A00', '#008299', ' #1E5DD3',
                     '#F0B819', '#00FFF7'],
      buttonName: '',
      fontColor: false,
      highlightColor: false
    };
  }

  ngOnInit(): void {
  }

  buttonClicked(event: any): void {
    event.stopPropagation();
    console.log(event?.dataset);
    this.buttonClick.emit(event?.dataset);
  }

  attachPopover(): void {
    this.upload = !this.upload;
  }
  dragenter(e): void {
    this.enter = true;
  }

  dragend(e): void {
    this.enter = false;
  }

  dragleave(e): void {
    this.enter = false;
  }
}
