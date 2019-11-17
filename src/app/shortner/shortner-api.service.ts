import { Injectable } from "@angular/core";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShortnerAPIService {
  // j'ai utilisé service du site rapidapi.com
  // configuration for Header

  // Key généré par le site

  private Key = "AIzaSyBk73B94RYqtIcmQnOnwU2_kMU4P7llfxs";
  // le service de site utlise application/x-www-form-urlencoded pour ses apis
  private headers = new HttpHeaders({
    "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
    "x-rapidapi-key": "2a46f6f368msh84bc758a6694a1fp1ef5f7jsn2d19b3918e4d",
    "content-type": "application/x-www-form-urlencoded"
  });

  constructor(private http: HttpClient) {}

  shorter(url: string) {
    const params = new HttpParams({
      fromObject: {
        url
      }
    });
    return this.http.post(
      "https://url-shortener-service.p.rapidapi.com/shorten",
      params,
      {
        headers: this.headers
      }
    );
  }
}
