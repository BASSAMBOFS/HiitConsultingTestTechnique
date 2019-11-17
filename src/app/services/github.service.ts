import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataResult } from "../Models/User";

@Injectable({
  providedIn: "root"
})
export class GuithubService {
  constructor(private http: HttpClient) {}

  search(user: string, perPage: number, page: number): Observable<DataResult> {
    return this.http.get<DataResult>(
      "//api.github.com/search/users?q=" +
        user +
        "&per_page=" +
        perPage +
        "&page=" +
        page
    );
  }
}
