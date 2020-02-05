import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';
import * as config from '../../../config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo: string;
  username: string;
  url: string;

  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('firstname');
    this.logo = config[0]["dashboardLogo"];
    this.url = this.constName.baseImage.file_img_url;
  }

}
