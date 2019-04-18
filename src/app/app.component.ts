import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WordpressService} from './providers/wordpress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private wp: WordpressService,
    private router: Router
  ) {
    this.initializeApp();
    this.retrievePages();
  }

  public pages:any;

  retrievePages(){
    this.wp.retrievePages().subscribe(results => {
      this.pages = results;
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
