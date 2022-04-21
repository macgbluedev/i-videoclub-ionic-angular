import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  works: {
    date: string,
    description: string
  }[];

  constructor() {
    this.works = [{date: '2021-2022',description: 'Software Developer Analyst - NTT Data (Everis)'},
    {date: '2019-2021',description: 'Data Analyst - NTT Data (Everis)'},
    {date: '2016-2018',description: 'Spare warehouse supervisor - Laboratorio Behrens'} ]
   }

  ngOnInit() {
  }

}
