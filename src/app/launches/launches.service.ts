import { Launch } from './launches.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  url: any;
  constructor(private readonly http: HttpClient) {
    this.url = "https://api.spacexdata.com/v3/launches?limit=100";
  }

  getLaunches(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
