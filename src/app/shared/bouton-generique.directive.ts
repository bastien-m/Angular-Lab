import { 
  Directive,
  Input,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[nglBtnGenerique]'
})
export class BoutonGeneriqueDirective implements OnInit{

  @Input() icon: string;

  private nativeElement: HTMLButtonElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    this.nativeElement = elementRef.nativeElement;
  }
  
  ngOnInit(): void {
    const iconElement = this.renderer.createElement('i');
    // ajout de l icone au bouton
    this.renderer.addClass(iconElement, `fa`)
    this.renderer.addClass(iconElement, `fa-${this.icon}`);
    this.renderer.setStyle(iconElement, 'padding-right', '5px');
    this.renderer.insertBefore(this.nativeElement, iconElement, this.nativeElement.childNodes[0]);
    
    // ajout de la classe au bouton
    this.nativeElement.classList.add('btn');
    this.nativeElement.classList.add('btn-primary');
  }

}
