import { Component } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { WordpressService} from '../providers/wordpress.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: any;
  pages: any;

  constructor(public router: Router, public wp: WordpressService){
      // this.retrievePages();
  }

  // ionViewDidLoad(){
  //   this.wp.retrieveCategories().subscribe(results => {
  //     this.categories = results.json();
  //   });
  //  }

   retrieveCategories(){
    this.wp.retrieveCategories().subscribe(results => {
      this.categories = results;
    });
   }

 

  

  loadCategory(id: number){
    this.router.navigate(['/category-list'], {
      queryParams: {categoryID: id}
    });
    
    
  }

  showPage(pageID){
    this.router.navigate(['page', pageID]);
  }

  showDegreePage(pageID, gallery, curriculum){
    this.router.navigate(['degree-page', pageID, gallery, curriculum]);
  }

  goHome(pageID){
    this.router.navigate(['']);
  }

}
