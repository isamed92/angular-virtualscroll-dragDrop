import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewport: CdkVirtualScrollViewport;
  personas = Array(5000).fill(0);
  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irFinal() {
    if(this.personas.length)
    this.viewport.scrollToIndex(this.personas.length);

  }
  irAlInicio() {
    if(this.personas.length)
    this.viewport.scrollToIndex(0);
  }

  irMitad() {
    if(this.personas.length)
    this.viewport.scrollToIndex(this.personas.length/2);
  }
}
