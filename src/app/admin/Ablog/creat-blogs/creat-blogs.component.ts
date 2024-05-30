import { BlogsModels } from 'src/app/models/blogs';
import { APIfunctoinsService } from './../../../services/apifunctoins.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { BlogsAPIFunctionService } from 'src/app/services/blogs-apifunction.service';
import { Router } from '@angular/router';

// import { APIfunctoinsService } from 'src/app/services/apifunctoins.service';

@Component({
  selector: 'app-creat-blogs',
  templateUrl: './creat-blogs.component.html',
  styleUrls: ['./creat-blogs.component.css', '../../shared.css'],
})
export class CreatBlogsComponent {
  message: string = '';
  constructor(private serv: BlogsAPIFunctionService, private router: Router) {
    this.serv.auth();
  }

  BlogForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    AuthorName: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    ImageBlog: new FormControl('', [Validators.required, CustomValidators.url]),
    ImageUser: new FormControl('', [Validators.required, CustomValidators.url]),
  });

  get BlogFormget() {
    return this.BlogForm;
  }

  get title() {
    return this.BlogForm.get('title');
  }
  get description() {
    return this.BlogForm.get('description');
  }
  get authorname() {
    return this.BlogForm.get('AuthorName');
  }
  get date() {
    return this.BlogForm.get('date');
  }
  get ImageBlog() {
    return this.BlogForm.get('ImageBlog');
  }
  get ImageUser() {
    return this.BlogForm.get('ImageUser');
  }

  create() {
    this.serv.post(this.BlogForm.value).subscribe((data) => {
      this.message = 'Blog created Successfully';
    });
    setTimeout(() => {
      this.message = '';
    }, 1000);
  }

  print(FormGroup: any) {
    console.log(FormGroup);
  }
}
