import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsummerService {
  constructor(private http: HttpClient) {}

  Url = 'http://localhost:3000/anonces';

  getAnonces(): any {
    return this.http.get(this.Url);
  }
  createAnonce(anonces: any) {
    return this.http.post(this.Url, anonces);
  }

  updateAnonce(anonces: any, id: any) {
    return this.http.put(`${this.Url}/${id}`, anonces);
  }
  deleteAnonce(id: any) {
    return this.http.delete(`${this.Url}/${id}`);
  }

  getAnonceById(id: any) {
    return this.http.get(`${this.Url}/${id}`);
  }
}
