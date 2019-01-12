import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { HostListener, Input } from '@angular/core/src/metadata/directives';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {
  
  constructor() {   
   
   }

}
