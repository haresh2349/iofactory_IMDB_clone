const { MovieModel } = require("../model/Movie.model");

const getMoviesList = async (req, res) => {
  try {
    await MovieModel.findOne({})
      .populate("actors.actorId", "name")
      .populate("producer", "name")
      .then((results) =>
        res.status(201).send({ type: "success", movies: results })
      );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
};

const addMovie = async (req, res) => {
  try {
    const movie = await new MovieModel(req.body);
    await movie.save();
    return res
      .status(201)
      .send({ type: "success", message: "Movie added Successfully" });
  } catch (error) {
    return res.status(400).send({ type: "error", message: "Movie not added" });
  }
};

const editMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    await MovieModel.findByIdAndUpdate(movieId, req.body);
    return res.status(201).send({ type: "success", message: "Movie updated." });
  } catch (error) {
    return res
      .status(400)
      .send({ type: "error", message: "Movie not updated" });
  }
};
const deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    await MovieModel.findByIdAndDelete(movieId, (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ type: "error", message: "Movie not deleted" });
      }
    });
    return res.status(201).send({ type: "success", message: "Movie deleted." });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ type: "error", message: "Movie not deleted" });
  }
};

module.exports = { getMoviesList, addMovie, editMovie, deleteMovie };
