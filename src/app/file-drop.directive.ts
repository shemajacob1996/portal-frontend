import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[appFileDrop]"
})
export class FileDropDirective {
  @Output() filesDropped = new EventEmitter<any>();
  @Output() filesHovered = new EventEmitter<boolean>();

  constructor() {}

  @HostListener("drop", ["$event"])
  onDrop(event:any) {
    event.preventDefault();
    this.filesDropped.emit(event.dataTransfer.files[0]);
    this.filesHovered.emit(false);
  }

  @HostListener("dragover", ["$event"])
  onDragOver(event:any) {
    event.preventDefault();

    this.filesHovered.emit(true);
  }

  @HostListener("dragleave", ["$event"])
  onDragLeave(event:any) {
    this.filesHovered.emit(false);
  }
}
