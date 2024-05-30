import { BlogsModels } from './../../models/blogs';
import { APIfunctoinsService } from './../../services/apifunctoins.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent {
  alldata!: BlogsModels[];
  constructor(private serv: APIfunctoinsService<BlogsModels>) {
    this.serv.get().subscribe((data: any) => {
      this.alldata=data;
    });
  }
}
