import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GenericNavbarComponent } from './common/components/generic-navbar/generic-navbar.component';
import { GenericFooterComponent } from './common/components/generic-footer/generic-footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { GenericTableComponent } from './common/components/generic-table/generic-table.component';
import { GenericPaginationComponent } from './common/components/generic-pagination/generic-pagination.component';
import { GenericModalComponent } from './common/components/generic-modal/generic-modal.component';
import { GenericFilterComponent } from './common/components/generic-filter/generic-filter.component';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ToastDirective } from './directives/toast.directive';
import { ToastComponent } from './common/components/toast/toast.component';
import { DeleteItemInforComponent } from './common/components/delete-item-infor/delete-item-infor.component';
import { RouterRoutes } from './routes/router.routing';
import { MapComponent } from './common/components/map/map.component';
import { VehicleMonitorComponent } from './pages/vehicle-monitor/vehicle-monitor.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GenericNavbarComponent,
    GenericFooterComponent,
    LoginFormComponent,
    UserManagementComponent,
    GenericTableComponent,
    GenericPaginationComponent,
    GenericModalComponent,
    GenericFilterComponent,
    UserFormComponent,
    ToastDirective,
    ToastComponent,
    DeleteItemInforComponent,
     MapComponent,
     VehicleMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterRoutes,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [DatePipe, ToastDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
