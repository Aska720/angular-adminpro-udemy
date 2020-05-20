import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('title')
  public legend: string = 'Legend';

  @Input()
  public percent: number = 50;

  @Output()
  private changeValue: EventEmitter<number> = new EventEmitter();

  @ViewChild('input')
  private input: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public changePercent(value: number): void {
    this.percent += value;
    this.fixValue();
    this.changeValue.emit(this.percent);
    this.input.nativeElement.focus();
  }

  public onChange(/*element: HTMLInputElement, */percent: number): void {
    this.percent = percent;
    this.fixValue();
    // changed to "ViewChild". The comments below were only if the element was passed as an argument
    // we can, instead, get the element with JS (with some "getElementBy.." function) but I prefer this way
    // element.valueAsNumber = this.percent;
    this.input.nativeElement.value = this.percent;
    this.changeValue.emit(this.percent);
  }

  private fixValue(): void {
    if (this.percent > 100) {
      this.percent = 100;
    } else if (!this.percent || this.percent < 0) {
      this.percent = 0;
    }
  }
}
