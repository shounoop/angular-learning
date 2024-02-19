import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  userName = 'Maria';
  isChildDestroyed = false;

  ngOnInit(): void {
    console.log('[parent component] ngOnInit trigger');
  }

  updateUser() {
    this.userName = 'Chris';
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
