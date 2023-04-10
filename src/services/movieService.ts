import movieRepository from "../repositories/movieRepository.js";
import { Movie, MovieUpdate } from "../protocols/movie.js";

async function create(body: Movie): Promise<void> {
  const { rowCount } = await movieRepository.findByName(body.name);
  if (rowCount !== 0) {
    throw new Error("Esse filme já existe");
  }

  await movieRepository.create(body);
}

async function selectAll(): Promise<Movie[]> {
  const { rows: movies } = await movieRepository.selectAll();

  if (movies[0].note === null && movies[0].summary === null) {
    const filteredMovies = movies.filter(
      (movie) => movie.note !== undefined && movie.summary !== undefined
    );
    return filteredMovies.map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        streaming: movie.streaming,
        gender: movie.gender,
        status: movie.status,
      };
    });
  }

  if (movies[0].note === null) {
    const filteredMovies = movies.filter(
      (movie) => movie.note !== undefined && movie.summary !== undefined
    );
    return filteredMovies.map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        streaming: movie.streaming,
        gender: movie.gender,
        status: movie.status,
        summary: movie.summary,
      };
    });
  }

  if (movies[0].summary === null) {
    const filteredMovies = movies.filter(
      (movie) => movie.note !== undefined && movie.summary !== undefined
    );
    return filteredMovies.map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        streaming: movie.streaming,
        gender: movie.gender,
        status: movie.status,
        note: movie.note,
      };
    });
  }

  return movies[0];
}

async function update(body: MovieUpdate, id: number): Promise<void> {
  const { rowCount, rows: movie } = await movieRepository.findById(id);

  if (rowCount === 0) {
    throw new Error("Esse filme não existe");
  }
  await movieRepository.update(body, id);
}

async function dell(id: number): Promise<void> {
  const { rowCount, rows: movie } = await movieRepository.findById(id);

  if (rowCount === 0) {
    throw new Error("Esse filme não existe");
  }
  await movieRepository.dell(id);
}

export default {
  create,
  selectAll,
  update,
  dell,
};
