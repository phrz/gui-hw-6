import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../api/movie-repository.service';
import { Movie } from '../api/movie';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styleUrls: [ 'movie-list.component.css' ]
})

export class MovieListComponent implements OnInit { 
	movies: Movie[] = [];
	isLoaded: boolean = false;
	isWorking: boolean = false;

	constructor(private movieRepository: MovieRepository, private router: Router) {}

	ngOnInit() {
		this.movieRepository.didUpdate.subscribe(movies => this.handleMovies(movies));
		this.movieRepository.load();
	}

	didClickDelete(movie: Movie) {
		this.isWorking = true;
		this.movieRepository.delete(movie.id);
	}

	handleMovies(movies: Movie[]) {
		this.movies = movies; 
		this.isLoaded = true;
		this.isWorking = false;
	}
}