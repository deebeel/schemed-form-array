# Angular 2 SchemedFormArray

The main goal of the package is to provide api for developers to automatically populate [FormArray](https://angular.io/docs/ts/latest/api/forms/index/FormArray-class.html) according to the scheme passed.
The semantic of the methods [setValue](https://angular.io/docs/ts/latest/api/forms/index/FormArray-class.html#!#setValue-anchor), [patchValue](https://angular.io/docs/ts/latest/api/forms/index/FormArray-class.html#!#patchValue-anchor) - fully saved,
the [reset](https://angular.io/docs/ts/latest/api/forms/index/FormArray-class.html#!#reset-anchor) adjusts the controls size, as the previous, what partially breaks the specification.  

```javascript
import { SchemedFormArray } from './SchemedFormArray';
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app',
  template: `
  <form [formGroup]="grp">
      <div *ngFor="let ctrl of grp.get('a').controls; let index = index">
             <input type="text" [formControl]="ctrl">

      </div>
      <button (click)="add()">ADD</button>
      <button (click)="remove()">REM</button>
      <button (click)="eq()">EQ</button>
      VALUE = {{grp.value | json}}
  </form>
  `,
})
export class AppComponent {
  grp : FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.grp = this.fb.group({
      a: new SchemedFormArray(()=>this.fb.control(''), []) 
    });
    
  }
  add(){
    this.grp.setValue({a: [1,2,3,4,5,6]})
  }
  remove(){
    this.grp.setValue({a: [10, 20]})
  }
  eq(){
    const v = this.grp.get('a').value.map(v=>v * 11);
    this.grp.setValue({a: v})
  }
}
``` 