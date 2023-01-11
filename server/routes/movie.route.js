const { Router } = require("express");
const {
  addMovie,
  editMovie,
  deleteMovie,
  getMoviesList,
} = require("../controller/movie.controller");
const { requireAuthorized } = require("../middleware/requireAuthorized");
const { requireLogin } = require("../middleware/requireLogin");
const MovieRouter = Router();
MovieRouter.get("/all", getMoviesList);
MovieRouter.post("/add", requireLogin, requireAuthorized, addMovie);
MovieRouter.patch("/edit/:movieId", requireLogin, requireAuthorized, editMovie);
MovieRouter.delete(
  "/delete/:movieId",
  requireLogin,
  requireAuthorized,
  deleteMovie
);

module.exports = { MovieRouter };
