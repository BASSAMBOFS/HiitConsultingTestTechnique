import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuListItemComponent } from "./core/menu-list-item/menu-list-item.component";
import { GithubSearchComponent } from "./github-search/github-search.component";
import { ShortnerComponent } from "./shortner/shortner.component";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuListItemComponent,
    ShortnerComponent,
    GithubSearchComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule {}
