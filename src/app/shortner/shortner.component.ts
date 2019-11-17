import { Component, OnInit } from "@angular/core";
import { ShortnerAPIService } from "./shortner-api.service";
import { FormControl } from "@angular/forms";
import { delay } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";
import { MessageComponent } from "../message/message.component";
@Component({
  selector: "app-shortner",
  templateUrl: "./shortner.component.html",
  styleUrls: ["./shortner.component.scss"]
})
export class ShortnerComponent implements OnInit {
  UrlToShorterForm = new FormControl("");
  UrlShortedForm = new FormControl(null);
  loading = false;
  constructor(
    private shortnerAPIService: ShortnerAPIService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.UrlShortedForm.disable();
  }
  shortenerEvent() {
    this.loading = true;
    this.shortnerAPIService
      .shorter(this.UrlToShorterForm.value)
      .pipe(delay(1000))
      .subscribe((res: any) => {
        this.loading = false;
        this.UrlShortedForm.enable();

        this.UrlShortedForm.setValue(res.result_url);

        this.snackBar.openFromComponent(MessageComponent, {
          duration: 6000
        });
      });
  }
  copy(text: string) {
    this.snackBar.open("IS Copied :feu::feu::feu::feu: !! ", "Dismiss", {
      duration: 5000,
      panelClass: ["success-snackbar"]
    });
  }
}
