import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-app-base-route',
  templateUrl: './app-base-route.component.html',
  styleUrls: ['./app-base-route.component.scss']
})
export class AppBaseRouteComponent{
  legajo: string = '168015';
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );
  private _mobileQueryListener: () => void;
  title: string| undefined= '';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route)=>{
          while(route.firstChild){
            route= route.firstChild;
            console.log(route)
          }
          return route;
        }),
        mergeMap((route)=> route.title))
        .subscribe((event)=> this.title =event)
  }


  public sectionsItems =[
    { label: 'Rendición Web', url: './Rendicion', icon: 'mail' },
    { label: 'Autorizar Rendición', url: './Autoriza', icon: 'build' },
    { label: 'Reporte Rendición', url: './Reporte', icon: 'receipt' },
  ]

  logOut(){
    // this.core.logOut();
    console.log('tenemos que salir',true)
    this.router.navigate(['login']);
  }


}
