import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "../app.component";
import { ClipboardModule } from "ngx-clipboard";

@NgModule({
  providers: [],
  declarations: [],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // angular - Material
    MaterialModule,
    // clipBoard
    ClipboardModule
  ],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClipboardModule
  ]
})
export class SharedModule {}
