import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
