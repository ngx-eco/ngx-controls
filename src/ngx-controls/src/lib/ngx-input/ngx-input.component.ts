// Angular
import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidatorFn, Validators, NgControl } from '@angular/forms';



@Component({
  selector: 'ngx-input',
  templateUrl: './ngx-input.component.html',
  styleUrls: ['./ngx-input.component.scss'],
  host: {
    'class': 'ngx-controls ngx-controls-input',
  },
})
export class NgxInputComponent implements ControlValueAccessor, Validator, OnInit {


  @ViewChild('input', {static: true}) input: ElementRef;
  public disabled: boolean;

  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() pattern: string = '';
  @Input() label: string = '';
  @Input() placeholder: string;
  @Input() error: string;
  @Input() name: string;

  constructor(
    @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const control = (this.ngControl.control as AbstractControl);
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event: any) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    return validators;
  }

  public isSuccess(): boolean {
    const ngControl: NgControl = this.ngControl;
    const control: AbstractControl = (ngControl.control as AbstractControl);
    return ((this.required && ngControl && control.valid && control.touched) ||
    !this.required && this.input.nativeElement.value.length > 0)
  }

  public isError(): boolean {
    const control: AbstractControl = (this.ngControl.control as AbstractControl);
    return (this.ngControl && !control.valid && control.touched);
  }

}
