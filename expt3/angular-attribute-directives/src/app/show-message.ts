import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[showMessage]'
})
export class ShowMessageDirective {
  @Input('showMessage') message!: string;

  private messageElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    if (!this.messageElement) {
      this.messageElement = this.renderer.createElement('p');
      this.renderer.setStyle(this.messageElement, 'color', 'red');
      this.renderer.setStyle(this.el.nativeElement,'color','red');
      const text = this.renderer.createText(this.message);
      this.renderer.appendChild(this.messageElement, text);
      const parent = this.renderer.parentNode(this.el.nativeElement);
      if (parent) {
        this.renderer.insertBefore(parent, this.messageElement, this.el.nativeElement.nextSibling);
      }
    }
  }
}
