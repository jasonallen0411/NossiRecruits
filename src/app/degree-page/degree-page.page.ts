import { Component, OnInit } from '@angular/core';
import { switchMap} from "rxjs/operators";
import { WordpressService} from "../providers/wordpress.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { url } from 'inspector';

@Component({
  selector: 'app-degree-page',
  templateUrl: './degree-page.page.html',
  styleUrls: ['./degree-page.page.scss'],
})
export class DegreePagePage implements OnInit {

  degreeData:any;
  curriculumData:any;
  galleryData:any;
  galleryHTMLDocument: any;
  galleryImageURLs;
  pageID;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wp: WordpressService
  ) { }

  ngOnInit() {
    //Get Degree Page Data
    this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.wp.retrievePagesByID( params.get('id') )
 )).subscribe(data => {
    console.log(data);
    this.degreeData = data;
    });

    //Get Gallery Page Data
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.wp.retrievePagesByID( params.get('gal') )
   )).subscribe(data => {
     this.pageID = data["id"];
     if( this.pageID == 280){
      this.galleryImageURLs = [];
      let parser = new DOMParser();
      this.galleryData = data;
      this.galleryHTMLDocument = parser.parseFromString(data['content']['rendered'], 'text/html');

          for(var i = 0; i < this.galleryHTMLDocument.getElementsByClassName('ghostkit-carousel-slide').length; i++){
            this.galleryImageURLs.push(this.galleryHTMLDocument.getElementsByClassName('ghostkit-carousel-slide')[i].querySelector('video').getAttribute('src'));
          }
     } else{
        this.galleryImageURLs = [];
        let parser = new DOMParser();
        this.galleryData = data;
        this.galleryHTMLDocument = parser.parseFromString(data['content']['rendered'], 'text/html');

            for(var i = 0; i < this.galleryHTMLDocument.getElementsByClassName('ghostkit-carousel-slide').length; i++){
              this.galleryImageURLs.push(this.galleryHTMLDocument.getElementsByClassName('ghostkit-carousel-slide')[i].querySelector('img').getAttribute('src'));
            }
      }
  });
      // this.curriculumData.galleryImageURLs = Array.from(this.galleryHTMLDocument.getElementsByClassName('ghostkit-carousel-slide').querySelector('img').getAttribute('src')).map(url => url);


      //Get Curriculum Page Data
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.wp.retrievePagesByID( params.get('cur') )
     )).subscribe(data => {
        console.log(data);
        this.curriculumData = data;
        });
  }
}
