import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegEmpComponent } from './reg-emp/reg-emp.component';
import { LoginComponent } from './login/login.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { BheaderComponent } from './bheader/bheader.component';
import { HomekitchenComponent } from './homekitchen/homekitchen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodgrainsComponent } from './foodgrains/foodgrains.component';
import { BakeryComponent } from './bakery/bakery.component';
import { UploadComponent } from './upload/upload.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { OptionsComponent } from './options/options.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "ng4-social-login";
import { BeveragesComponent } from './beverages/beverages.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchComponent } from './search/search.component'

const config = new AuthServiceConfig([{
  id : GoogleLoginProvider.PROVIDER_ID,
  provider : new GoogleLoginProvider("791247963922-pt92nub60qnm6cn4sbghbgednuce177f.apps.googleusercontent.com")
}], false);

export function provideConfig() {
  return config;
}

const appRoot: Routes = [
{path : '', component : HomepageComponent},
{path: 'login', component: LoginComponent},
{path: 'regEmp',
component:RegEmpComponent},
{path: 'cart',
component: CartComponent},
{path: 'homekitchen',
component: HomekitchenComponent},
{path: 'view',
component: HomekitchenComponent},
{path : 'homepage',
component : HomepageComponent},
{path: 'foodgrains',
component: FoodgrainsComponent},
{path : 'uploadImage',
component : UploadImageComponent},
{path: 'bakery',
component: BakeryComponent},
{path : 'options',
component : OptionsComponent},
{path : 'page',
component : UploadComponent},
{path: 'beverages',
component: BeveragesComponent},
{path: 'logout',
//canActivate : [AuthGuard],
component: LoginComponent},
{path: 'Checkout',
component: CheckoutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegEmpComponent,
    LoginComponent,
    ExpPipe,
    GenderPipe,
    FooterComponent,
    CartComponent,
    BheaderComponent,
    HomekitchenComponent,
    HomepageComponent,
    FoodgrainsComponent,
    BakeryComponent,
    UploadComponent,
    UploadImageComponent,
    OptionsComponent,
    BeveragesComponent,
    CheckoutComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: //[AuthGuard],
  [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
