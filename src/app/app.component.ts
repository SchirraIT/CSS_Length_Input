import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Css Input Form Control';

  cssUnit = "16%";

  get cssUnitControl() {
    return this.cssUnitForm.get('cssUnit')
  }
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
    });

  }

  save() {
    alert(this.cssUnit);
  }

  updateFormControl(control, event) {
    this.cssUnitForm.get(control).setErrors({'childInvalid': event});
  }

}
