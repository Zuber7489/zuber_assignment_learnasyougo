import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

}
