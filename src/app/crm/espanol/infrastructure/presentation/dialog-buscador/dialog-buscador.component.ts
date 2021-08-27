import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-buscador',
  templateUrl: './dialog-buscador.component.html',
  styleUrls: ['./dialog-buscador.component.scss']
})
export class DialogBuscadorComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = []//= ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor( public dialogRef: MatDialogRef<DialogBuscadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data !== null) {
      this.options = this.data.options;
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

}
