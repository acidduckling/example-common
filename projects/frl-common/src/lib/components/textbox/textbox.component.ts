import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'frl-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextboxComponent),
    }
  ]
})
export class TextboxComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() value: string;

  @Output() valueChange = new EventEmitter();

  change(newValue) {
    console.log('new value: ', newValue);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  propagateChange = (_: any) => {};

  propagateTouch = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(newValue: string): void {
    this.value = newValue;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
