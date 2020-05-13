import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, SharedPath, ApiResponse } from '@nrwlpoc/app-helpers';

@Component({
  selector: 'nrwlpoc-emailsub',
  templateUrl: './emailsub.component.html',
  styleUrls: ['./emailsub.component.css']
})
export class EmailsubComponent {

  emailVal = '';
  response: ApiResponse;

  constructor(private http: HttpClient) { }

  save() {
    this.http.get<ApiResponse>(API_URL + SharedPath + '/' + this.emailVal).subscribe(response => {
      this.response = response;
    });
  }

}
