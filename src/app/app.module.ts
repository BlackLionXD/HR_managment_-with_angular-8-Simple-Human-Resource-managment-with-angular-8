import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    DeleteConfirmationComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    NavbarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
