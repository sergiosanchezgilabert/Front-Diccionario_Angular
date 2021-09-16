import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { HighlightSpanKind } from 'typescript';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnChanges {

  show = false

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.show) {
      console.log('Hola')
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart && localStorage.getItem('logueado') !== null) {
        this.show = true
      }else if(event instanceof NavigationEnd && localStorage.getItem('logueado') !== null) {
        this.show = false
      }
    })
    /*this.router.events.pipe(delay(3000)).subscribe(event => {
      if (event instanceof NavigationEnd && localStorage.getItem('logueado') !== null) {
        this.show = false
      }
    })*/
  }

}
