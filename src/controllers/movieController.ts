import { Request, Response, NextFunction } from "express";
import movieService from "../services/movieService.js";
import { Movie } from "../protocols/movie.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, streaming, gender, status } = req.body as Movie;

  try {
    await movieService.create({ name, streaming, gender, status });
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function selectAll(req: Request, res: Response, next: NextFunction) {
  try {
    const movies = await movieService.selectAll();

    return res.send(movies);
  } catch (error) {
    next(error);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { status, note, summary } = req.body as Movie;
  const { id } = req?.params;

  try {
    await movieService.update({ status, note, summary }, Number(id));
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function dell(req: Request, res: Response, next: NextFunction) {
  const { id } = req?.params;

  try {
    await movieService.dell(Number(id));
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  selectAll,
  update,
  dell,
};
