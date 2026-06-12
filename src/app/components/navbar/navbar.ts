import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
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
