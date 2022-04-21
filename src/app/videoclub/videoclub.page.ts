import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService} from '../shared/api/movies.service'
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

  movies: Movie[];

  constructor(private router: Router, private moviesService: MoviesService ) { 
    this.movies = this.moviesService.getPeliculas();
  }


  ngOnInit() {
  }

}
