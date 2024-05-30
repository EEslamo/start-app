import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { ClientComponent } from './main/client/client.component';
import { BlockComponent } from './main/block/block.component';
import { AboutComponent } from './main/about/about.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ServicesComponent } from './main/services/services.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AdhomeComponent } from './admin/adhome/adhome.component';
import { CreatBlogsComponent } from './admin/Ablog/creat-blogs/creat-blogs.component';
import { ListBlogsComponent } from './admin/Ablog/list-blogs/list-blogs.component';
import { UpdateBlogComponent } from './admin/Ablog/update-blog/update-blog.component';
import { UpdateServicesComponent } from './admin/Aservices/update-services/update-services.component';
import { CreatServicesComponent } from './admin/Aservices/creat-services/creat-services.component';
import { ListServicesComponent } from './admin/Aservices/list-services/list-services.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { LoginComponent } from './admin/user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ClientComponent,
    BlockComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    NotfoundComponent,
    LayoutComponent,
    AdhomeComponent,
    CreatBlogsComponent,
    ListBlogsComponent,
    UpdateBlogComponent,
    UpdateServicesComponent,
    CreatServicesComponent,
    ListServicesComponent,
    AddUserComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
