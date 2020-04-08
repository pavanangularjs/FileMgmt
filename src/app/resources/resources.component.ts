import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any;
  constructor() { }

  ngOnInit() {
    this.resources = [
      { name: 'Resource 1'},
      { name: 'Resource 2'},
      { name: 'Resource 3'},
      { name: 'Resource 4'},
      { name: 'Customer Documents'}
    ];
  }

}
