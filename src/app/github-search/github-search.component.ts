import { Component, OnInit, ViewChild } from "@angular/core";
import { GuithubService } from "../services/github.service";
import { DataResult, User } from "../Models/User";
import { FormGroup, FormControl } from "@angular/forms";
import {
  debounceTime,
  switchMap,
  startWith,
  distinctUntilChanged,
  tap,
  takeUntil,
  catchError,
  map
} from "rxjs/operators";
import { empty, Observable, merge, of } from "rxjs";
import { MatPaginator } from "@angular/material";
@Component({
  selector: "app-github-search",
  templateUrl: "./github-search.component.html",
  styleUrls: ["./github-search.component.scss"]
})
export class GithubSearchComponent implements OnInit {
  dataResult$: Observable<DataResult>;
  form: FormGroup;
  lenght: number;
  isLoading: boolean;
  error: string;

  @ViewChild("paginator", { static: true })
  paginator: MatPaginator;

  constructor(private guithubService: GuithubService) {
    this.form = new FormGroup({
      user: new FormControl("bassam")
    });
  }

  ngOnInit() {}

  //Get data from service in the view , and after any form change
  ngAfterViewInit() {
    this.dataResult$ = merge(
      this.paginator.page,
      this.form.controls.user.valueChanges.pipe(
        startWith("bassam"),
        distinctUntilChanged(),
        debounceTime(1000)
      )
    ).pipe(
      switchMap(e =>
        e
          ? this.getDataByUserName({
              UserName: this.form.get("user").value,
              perPage: this.paginator.pageSize,
              page: this.paginator.pageIndex + 1
            })
          : empty()
      ),
      tap(e => (this.lenght = e.total_count))
    );
  }

  // a methode to get data with a critaria
  getDataByUserName(dataToSend: DataToSend) {
    return this.guithubService.search(
      dataToSend.UserName,
      dataToSend.perPage,
      dataToSend.page
    );
  }
}
export interface DataToSend {
  UserName: string;
  perPage: number;
  page: number;
}
