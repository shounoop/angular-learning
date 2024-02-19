import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[child component] ngOnChanges trigger', changes);

    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Chris') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit(): void {
    console.log('[child component] ngOnInit trigger');
  }

  ngDoCheck(): void {
    console.log('[child component] ngDoCheck trigger');
  }

  ngAfterContentInit(): void {
    console.log('[child component] ngAfterContentInit - wrapper', this.wrapper);
    console.log(
      '[child component] ngAfterContentInit - contentWrapper',
      this.content
    );
  }

  ngAfterContentChecked(): void {
    console.log('[child component] ngAfterContentChecked trigger');
  }

  ngAfterViewInit(): void {
    console.log('[child component] ngAfterViewInit trigger');
  }

  ngAfterViewChecked(): void {
    console.log('[child component] ngAfterViewChecked trigger');
  }

  ngOnDestroy(): void {
    console.log('[child component] Child component is destroyed!');
  }
}
