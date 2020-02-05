import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  url: string;

  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('firstname');
    this.url = this.constName.baseImage.file_img_url;
  }

}
