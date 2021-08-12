import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {
  TratoCardModule,
  TratoFormFieldModule,
  TratoInputModule,
  TratoIconModule,
  TratoButtonModule,
  TratoBlankslateModule,
  TratoTooltipModule,
  TratoRadioModule,
  TratoFileUploadModule,
  TratoTextEditorModule,
  TratoPhonePreviewModule,
  TratoActionIconModule} from '@zupit/trato-web-ui';
import { PostLoginComponent } from './components/acess/post-login/post-login.component';
import { AuthService } from './components/acess/service/auth.service';
import { AuthGuard } from './components/acess/guard/auth.guard';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { HomeComponent } from './components/home/home.component';
import { HistoricCouponComponent } from './components/historic-coupon/historic-coupon.component';
import { NgxMaskModule } from 'ngx-mask';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CamComponent } from './components/cam/cam.component';
import { ValidateCouponComponent } from './components/validate-coupon/validate-coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLoginComponent,
    MenuFooterComponent,
    HomeComponent,
    HistoricCouponComponent,
    CamComponent,
    ValidateCouponComponent
  ],
  imports: [
    HttpClientModule,
    NgxMaskModule.forRoot({dropSpecialCharacters:false}),
    HttpClientJsonpModule,
    ZXingScannerModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    TratoCardModule,
    TratoFormFieldModule,
    TratoInputModule,
    TratoIconModule,
    TratoButtonModule,
    TratoBlankslateModule,
    TratoTooltipModule,
    TratoRadioModule,
    TratoFileUploadModule,
    TratoTextEditorModule,
    TratoPhonePreviewModule,
    TratoActionIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpClientModule, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
