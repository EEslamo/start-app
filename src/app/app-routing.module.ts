import { UpdateServicesComponent } from './admin/Aservices/update-services/update-services.component';
import { CreatServicesComponent } from './admin/Aservices/creat-services/creat-services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './main/hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ServicesComponent } from './main/services/services.component';
import { BlockComponent } from './main/block/block.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { AdhomeComponent } from './admin/adhome/adhome.component';
import { CreatBlogsComponent } from './admin/Ablog/creat-blogs/creat-blogs.component';
import { ListBlogsComponent } from './admin/Ablog/list-blogs/list-blogs.component';
import { UpdateBlogComponent } from './admin/Ablog/update-blog/update-blog.component';
import { ListServicesComponent } from './admin/Aservices/list-services/list-services.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { LoginComponent } from './admin/user/login/login.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blogs', component: BlockComponent },
  { path: 'admin', component: AdhomeComponent },
  //Blogs admin panel
  { path: 'admin/blogs/create', component: CreatBlogsComponent },
  { path: 'admin/blogs/list', component: ListBlogsComponent },
  { path: 'admin/blogs/update/:id', component: UpdateBlogComponent },
  //Service admin panel
  { path: 'admin/services/create', component: CreatServicesComponent },
  { path: 'admin/services/update/:id', component: UpdateServicesComponent },
  { path: 'admin/services/list', component: ListServicesComponent },
  //User admin panel
  { path: 'admin/user/create', component: AddUserComponent },
  { path: 'admin/user/login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
