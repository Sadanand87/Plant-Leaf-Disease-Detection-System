import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  cdata:any;
  childEvent:any;
  getData(val : any){
    this.cdata = val;
  }
}
