import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/services/loader-service';
import { PageService } from '@modules/pages/services/page.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  data: any;
  constructor(private pageService: PageService, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.startLoading();
    this.pageService.getPage({ title: 'about-us' }).subscribe((result: any) => {
      this.loader.stopLoading();
      this.data = result.record[0].body;
    })
  }

}
