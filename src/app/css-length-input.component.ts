import {Component, forwardRef, HostBinding, Input, DoCheck, AfterContentInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

type unit = 'em' | 'ex' | '%' | 'px' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'ch' | 'rem' | 'vh' | 'vw' | 'vmin' | 'vmax';

class ICssValue {
  value: number;
  unit: unit;
}

@Component({
  selector: 'app-css-length-input',
  templateUrl: './css-length-input.component.html',
  styleUrls: ['./css-length-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CssLengthInputComponent),
      multi: true
    }
  ]
})
export class CssLengthInputComponent implements AfterContentInit, ControlValueAccessor {
  @HostBinding('attr.id')
  externalId = '';

  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  @Input('value') _value: string;
  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  propagateChange = (_: any) => {};

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
    this.cssUnit = this.parseProperty(this.value);
  }

  get value() {
    return this._value;
  }

  @Input('min') _min?: number;
  set min(val) {
    this._min = val;
  }

  get min() {
    return this._min;
  }

  @Input('max') _max?: number;
  set max(val) {
    this._max = val;

  }
  get max() {
    return this._max;
  }

  @Input('slider') _slider;
  set slider(val) {
    this._slider = val;
  }

  get slider() {
    return this._slider;
  }

  @Input('disabled') _disabled;
  set disabled(val) {
    this._disabled = val;
  }
  get disabled() {
    return this._disabled;
  }

  protected UNITS = ['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax'];
  cssUnitForm: FormGroup;
  validators = [];
  protected cssUnit = new ICssValue();

  constructor(private formBuilder: FormBuilder) {
    this.cssUnitForm = this.formBuilder.group({
      value: new FormControl(
        {value: this.cssUnit.value},
        []
      ),
      unit: new FormControl(
        {value: this.cssUnit.unit},
        [Validators.required]
      )
    });
    this.cssUnitForm.valueChanges.subscribe(changes => {
      console.log('changed detected');
      if (this.cssUnitForm.valid) {
        this.cssUnit = changes as ICssValue;
        this.value = `${this.cssUnit.value}${this.cssUnit.unit}`;
      }
    });
  }

  ngAfterContentInit(): void {
    this.validators.push(Validators.required);
    if (this.min) {
      this.validators.push(Validators.min(this.min));
    }
    if (this.max) {
      this.validators.push(Validators.max(this.max));
    }
    this.cssUnitForm.get('value').setValidators(this.validators);
    this.cssUnitForm.get('value').setValue(this.cssUnit.value);
    this.cssUnitForm.get('unit').setValue(this.cssUnit.unit);
    this.cssUnitForm.get('value').disable(this.disabled);
    this.cssUnitForm.get('unit').disable(this.disabled);
  }

  registerOnChange(fn) {
    this.onChange = fn;
    this.propagateChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
    this.disabled = isDisabled;
  }

  private parseProperty(prop: string): ICssValue {
    const value = parseInt(prop);
    const unit = this.UNITS.find((val) => val === prop.replace(parseInt(prop).toString(), '')) as unit;
    return {value, unit};
  }
}
