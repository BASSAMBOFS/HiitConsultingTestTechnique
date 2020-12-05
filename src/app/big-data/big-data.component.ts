import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss']
})
export class BigDataComponent implements OnInit {

  scripts = new FormControl();
  allScripts: string[] = ['Script 1', 'Script 2', 'Script 3', 'Script 4', 'Script 5', 'Script 6'];
  
  constructor() { }

  ngOnInit() {
  }

}
