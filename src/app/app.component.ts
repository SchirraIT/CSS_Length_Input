import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atComponents';

  cssUnit = "16%";

  cssUnitForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.cssUnitForm = this.formBuilder.group({
      cssUnit: new FormControl(
        {value: this.cssUnit, disabled: false},
        []
      )
    });
    this.cssUnitForm.valueChanges.subscribe(changes => {
      this.cssUnit = changes.cssUnit;
    })
  }

  get cssUnitControl() {
    return this.cssUnitForm.get('cssUnit')
  }
}
