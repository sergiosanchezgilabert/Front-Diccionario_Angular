import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  showFiller = false;

  showIngles =false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  inglesOn(){
    this.router.navigate(['ingles']);
  }

  espanolOn(){
    this.router.navigate(['espanol']);
  }

  inicio(){
    this.router.navigate(['']);
  }

}
