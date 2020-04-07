import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: any;

  constructor() { 
     this.files = [
      { name: 'Form Validations', url: 'https://angular.io/guide/form-validation', type: 'HTML' },
      { name: 'Animations in Angular', url: 'https://angular.io/guide/animations', type: 'HTML' },
      { name: 'HTML Tutorial', url: 'https://www.tutorialspoint.com/html/html_tutorial.pdf', type: 'PDF' },
      { name: 'App Deployment', url: 'https://angular.io/start/start-deployment', type: 'HTML' },
      { name: 'Learn HTML & CSS', url: 'https://wtf.tw/ref/duckett.pdf', type: 'PDF' },
      { name: 'Python for Everybody', url: 'http://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf', type: 'PDF' },
      { name: 'Bootstrap Tutorial', url: 'https://wiki.lib.sun.ac.za/images/0/07/Bootstrap-tutorial.pdf', type: 'PDF' },
      { name: 'Dependency injection in Angular', url: 'https://angular.io/guide/dependency-injection', type: 'HTML' },
      { name: 'Ahead-of-time (AOT) compilation', url: 'https://angular.io/guide/aot-compiler', type: 'HTML' },
      { name: 'Angular Material', url: 'https://www.tutorialspoint.com/angular_material/angular_material_tutorial.pdf', type: 'PDF' }
    ];
  }

  ngOnInit() {
  }

}
