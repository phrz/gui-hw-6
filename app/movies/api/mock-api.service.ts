import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockAPIService implements InMemoryDbService {
	createDb() {
		let movies = [];
		return {movies};
	}
}