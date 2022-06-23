import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[decimalLimiter]"
})
export class TwoDigitDecimaNumberDirective {
  @Input() set decimalLimiter(val: number) {
    if (val === 3) {
      this.regex = new RegExp(/^\d*\.?\d{0,3}$/g);
    } else if (val === 2) {
      this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
    }
  }
  regex!: RegExp;
  private specialKeys: Array<string> = [
    "Backspace",
    "Tab",
    "End",
    "Home",
    "-",
    "ArrowLeft",
    "ArrowRight",
    "Del",
    "Delete"
  ];
  constructor(private el: ElementRef) {}
  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1 || event.ctrlKey === true) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key == "Decimal" ? "." : event.key,
      current.slice(position)
    ].join("");
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
