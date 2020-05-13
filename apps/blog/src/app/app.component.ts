import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, MessagePath, ApiResponse } from '@nrwlpoc/app-helpers';

@Component({
  selector: 'nrwlpoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  response: ApiResponse;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<ApiResponse>(API_URL + MessagePath).subscribe(response => {
      this.response = response;
    });
  }
}
