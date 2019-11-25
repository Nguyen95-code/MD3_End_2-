import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from './awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  API_URL = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAllAwesome(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(this.API_URL);
  }
  create(awesome: Awesome) {
    return this.http.post(this.API_URL, awesome);
  }
  edit(id: number, awesome: Awesome): Observable<Awesome> {
    return this.http.put<Awesome>(`${this.API_URL}/${id}`, awesome);
  }

  getById(id: string): Observable<Awesome> {
    return this.http.get<Awesome>(`${this.API_URL}/${id}`);
  }
  delete(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(`${this.API_URL}/${id}`);
  }

}
