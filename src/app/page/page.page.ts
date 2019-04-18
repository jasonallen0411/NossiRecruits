import { Component, OnInit } from '@angular/core';
import { switchMap} from "rxjs/operators";
import { WordpressService} from "../providers/wordpress.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {


  pageData:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wp: WordpressService
  ) { }

  
  ngOnInit() {
       this.route.paramMap.pipe(
       switchMap((params: ParamMap) => this.wp.retrievePagesByID( params.get('id') )
    )).subscribe(data => {
       console.log(data);
       this.pageData = data;
   });
  }
}
