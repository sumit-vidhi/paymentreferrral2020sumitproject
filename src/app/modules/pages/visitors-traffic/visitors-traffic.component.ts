import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/services/loader-service';
import { PageService } from '@modules/pages/services/page.service';
@Component({
  selector: 'app-visitors-traffic',
  templateUrl: './visitors-traffic.component.html',
  styleUrls: ['./visitors-traffic.component.scss']
})
export class VisitorsTrafficComponent implements OnInit {
  data: any;
  constructor(private pageService: PageService, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.startLoading();
    this.pageService.getPage({ title: 'visitors-traffic' }).subscribe((result: any) => {
      this.loader.stopLoading();
      this.data = result.record[0].body;
    })
  }

}
