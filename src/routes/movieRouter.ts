import { Router } from "express";
import moviesController from "../controllers/movieController.js";
import { validateSchema } from "../middlewares/movieMiddleware.js";
import { movieSchema } from "../schemas/movieSchema.js";

const movieRoutes = Router();

movieRoutes.post(
  "/movies",
  validateSchema(movieSchema),
  moviesController.create
);
movieRoutes.get("/movies", moviesController.selectAll);
movieRoutes.put("/:id/movies", moviesController.update);
movieRoutes.delete("/:id/movies", moviesController.dell);

export default movieRoutes;
