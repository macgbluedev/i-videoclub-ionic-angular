import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  }

  constructor() {
    this.autor = {name: 'Moisés Croes',email:'moises@email.com',twitter:'@moises',phone:'555666777'}
   }

  ngOnInit() {
  }

}
