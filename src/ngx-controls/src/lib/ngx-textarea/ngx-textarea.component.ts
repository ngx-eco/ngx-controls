// Angular
import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidatorFn, Validators, NgControl } from '@angular/forms';



@Component({
  selector: 'ngx-textarea',
  templateUrl: './ngx-textarea.component.html',
  styleUrls: ['./ngx-textarea.component.scss']
})
export class NgxTextareaComponent implements ControlValueAccessor, Validator, OnInit {


  @ViewChild('textarea', {static: true}) textarea: ElementRef;
  disabled;

  @Input() required: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() error: string;
  @Input() name: string;
  @Input() rows: number = 3;

  constructor(
    @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.ngControl.control;
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

  onChange(event) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.textarea.nativeElement.value = obj;
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
    return ((this.required && this.ngControl && this.ngControl.control.valid && this.ngControl.control.touched) ||
    !this.required && this.textarea.nativeElement.value.length > 0)
  }

  public isError(): boolean {
    return (this.ngControl && !this.ngControl.control.valid && this.ngControl.control.touched);
  }

}
