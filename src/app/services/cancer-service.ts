import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CancerService {

  private apiUrl = 'https://lung-cancer-detection-ya92.onrender.com/predict';

  constructor(private http: HttpClient) {}

  predict(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  
}
