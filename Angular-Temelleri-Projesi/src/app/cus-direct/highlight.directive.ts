import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  @Input() highlightColor:string="";


  constructor(private el: ElementRef) {

  }
 @HostListener('mouseenter') onMouseEnter() {
  this.el.nativeElement.style.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') onMouseLeave() {
  this.el.nativeElement.style.backgroundColor = this.highlightColor;
}

// private highlight(color: string) {
//   this.el.nativeElement.style.backgroundColor = color;
// }

// @HostListener('mouseenter') onMouseEnter() {
//   this.Big();
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.Small();
// }

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
Big(){
  this.el.nativeElement.style="font-size:2rem"
}

Small(){
  this.el.nativeElement.style="font-size:0.5rem"
}
}
