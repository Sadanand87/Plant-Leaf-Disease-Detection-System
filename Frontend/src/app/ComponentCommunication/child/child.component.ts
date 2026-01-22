import { Component, EventEmitter } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  outputs : ['childEvent']
})
export class ChildComponent {


  childEvent = new EventEmitter();
  onChange(val : any){
    console.log('This is the child input value : ' , val);
    this.childEvent.emit(val);
  }
}
