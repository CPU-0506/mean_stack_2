import { Directive,TemplateRef,ViewContainerRef,inject,input } from '@angular/core';
import {Input} from '@angular/core'

@Directive({
  selector: '[repeat]'
})
export class Repeat {
    constructor(
        private templateRef:TemplateRef<any>,
        private viewContainer:ViewContainerRef
    ){}

    @Input() set repeat(times:number){
        this.viewContainer.clear();
        for(let i=0;i<times;i++){
            this.viewContainer.createEmbeddedView(this.templateRef,{index:i});
        }
    }
}
