import { Injectable } from '@angular/core';

import { Movie } from './movie';

@Injectable()
export class MovieRepository {

	private _movies: Movie[];

	private getIndex(id : number){
		for (var i = this._movies.length; i--;) {
			var movie = this._movies[i];
			if(movie.id == id) return i;
		}
		return -1;
	}

	constructor(){
		this._movies = [
			{ id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 1 },
			{ id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 2 },
			{ id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 3 }
		];
	}

	public list() : Movie[] {
		return this._movies;
	}

	public get(id : number) : Movie {
		var index = this.getIndex(id);
		return this._movies[index];
	}

	public add(movie: Movie) {
		movie.id = this._movies.length + 1;
		this._movies.push(movie);
	}

	public update(movie: Movie) {
		var index = this.getIndex(movie.id);
		this._movies[index] = movie;
	}

	public delete(id : number) {
		var index = this.getIndex(id);
		this._movies.splice(index, 1);
	}
}
