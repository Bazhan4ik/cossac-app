import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Goods } from 'src/models/goods';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { };

  //url: string = "http://localhost:3000";
  url = "";
  time: number = 0;


  getId(id): Promise<Goods> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/cargo/byid/${id}`).subscribe((res: Goods) => {
        resolve(res);
      });
    });
  }

  searchCargo(data): Promise<Goods[]> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/cargo/search`, data).subscribe((res: Goods[]) => {
        resolve(res);
      });
    });
  }

  get cargo(): Promise<Goods[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/cargo/${this.time}`).subscribe((res: Goods[]) => {
        this.time++;
        resolve(res);
      });
    });
  }


}
