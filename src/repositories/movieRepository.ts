import connection from "../config/database.js";
import { Movie, MovieUpdate } from "../protocols/movie.js";

async function create(body: Movie) {
  return await connection.query(
    `
        INSERT INTO movie (name, streaming, gender, status)
        VALUES ($1, $2, $3, $4);
        `,
    [body.name, body.streaming, body.gender, body.status]
  );
}

async function selectAll() {
  return await connection.query(
    `
        SELECT * FROM movie;
        `
  );
}

async function update(body: MovieUpdate, id: number) {
  return await connection.query(
    `
        UPDATE movie SET status = $1, note = $2, summary = $3 WHERE id = $4;
        `,
    [body.status, body.note, body.summary, id]
  );
}

async function dell(id: number) {
  return await connection.query(
    `
        DELETE FROM movie WHERE id = $1;
        `,
    [id]
  );
}

async function findByName(name: string) {
  return await connection.query(
    `
        SELECT * FROM movie WHERE name = $1;
        `,
    [name]
  );
}

async function findById(id: number) {
  return await connection.query(
    `
        SELECT * FROM movie WHERE id = $1;
        `,
    [id]
  );
}

export default {
  create,
  selectAll,
  update,
  dell,
  findByName,
  findById,
};
