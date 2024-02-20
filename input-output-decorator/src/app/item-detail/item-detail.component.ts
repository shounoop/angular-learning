import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  constructor() {}

  ngOnInit(): void {}
}
