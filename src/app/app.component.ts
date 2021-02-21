import { Component,OnChanges,SimpleChanges } from '@angular/core';
// ChangeDetectionStrategy
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  
  filesFromChild:any=[]
  title = 'minieditor';
  defValue = 'jdi';
  modelvalue = '';
  editorConfig = {
    file: true,
    mentionedNames: [{ id: 244 , name: 'Alec'}, { id: 560, name: 'Pappu'}, { id: 747, name: 'Joyce'}],
    mentionedDates: ['19-02-2020', '11-02-2020', '12-02-2020', '14-02-2020'],
    buttonName: 'Comment',
    fontColor: true,
    highlightColor: true,
    menuPlacement: 'bottom'
  };
  
  

//from menu to container
filesSaved($event: any) {
  this.filesFromChild = $event;
  console.log("APP COMPONENT",this.filesFromChild)
  // this.sendSavedFiles.emit(this.filesFromChild)
  
}


  

  hello(): void {
    console.log('HELLO3');
    
  }
}
