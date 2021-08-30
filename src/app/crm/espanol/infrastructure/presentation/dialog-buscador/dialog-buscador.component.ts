import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-buscador',
  templateUrl: './dialog-buscador.component.html',
  styleUrls: ['./dialog-buscador.component.scss']
})
export class DialogBuscadorComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = []
  idioma: string
  filteredOptions: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<DialogBuscadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
    if (this.data !== null) {
      this.options = this.data.options
      this.idioma = this.data.idioma
    }

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  buscarOn(palabra: string) {
    if (palabra !== '') {
      if (this.idioma == 'ingles')
        this.router.navigate(['ingles', palabra])
      else
        this.router.navigate(['espanol', palabra])
    }
  }
}
