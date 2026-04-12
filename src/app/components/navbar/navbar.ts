import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    console.log('Hello from Navbar component!');
  }
}
