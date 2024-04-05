// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RectangleModel } from '../models/model.rectangle'; // Assuming RectangleModel is defined

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:44345/rectangle'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getInitialDimensions(): Observable<RectangleModel> {
    return this.http.get<RectangleModel>(`${this.apiUrl}`);
  }

  updateDimensions(dimensions: RectangleModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, dimensions);
  }
}
