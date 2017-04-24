import { Component } from '@angular/core';
import { MovieRepository } from '../api/movie-repository.service';
import { Movie } from '../api/movie';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styleUrls: [ 'movie-list.component.css' ]
})

export class MovieListComponent { 
	movies : Movie[];

	constructor(private movieRepository: MovieRepository, private router: Router){
		this.movies = this.movieRepository.list();
	}

	didClickDelete(movie: Movie) {
		this.movieRepository.delete(movie.id);
	}
}