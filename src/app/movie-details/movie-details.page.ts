import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../shared/api/movies.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: Movie;

  constructor(private activatedRouted: ActivatedRoute, private moviesService: MoviesService ) { 
  }

  ngOnInit() {
    const idMovie = this.activatedRouted.snapshot.paramMap.get('id');
    
    //this.movie = this.moviesService.getMovie(idMovie);

    this.moviesService.getMovie(idMovie).subscribe(
      result => {
        this.movie = result;
      },
      err => {
        console.log(err);
     });
  }

}
