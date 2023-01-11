const express = require("express");
const { ConnectDB } = require("./config/db");
const { AuthRouter } = require("./routes/auth.route");
const { MovieRouter } = require("./routes/movie.route");
const User = require("./model/User.model");
const Producer = require("./model/Producer.model");
const Actor = require("./model/Actor.model");
const Movie = require("./model/Movie.model");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/movie", MovieRouter);
app.listen(PORT, async (req, res) => {
  try {
    await ConnectDB();
    console.log(`App is running on PORT : ${PORT}`);
  } catch (error) {
    console.log("App is not connected");
  }
});

// {
//   "name":"Ae Dil He Mushkil 2",
//   "yearOfRelease":2016,
//   "poster":"https://upload.wikimedia.org/wikipedia/en/e/ec/Ae_Dil_Hai_Mushkil.jpg",
//   "producer":"63bdb88518d373dd9f37ec7a",
//   "actors":[{"actorId":"63be3acf18d373dd9f8c649e"},{"actorId":"63be3acf18d373dd9f8c6496"},{"actorId":"63be45c918d373dd9f93e899"},{"actorId":"63be45c918d373dd9f93e89a"}],
//   "plot":"The film begins with the interview of Ayan Sanger, a singer who has newly acquired fame with his non-filmy songs. He tells the story of his experience of love in a flashback. A few years ago, in London, a chance meeting in a disco between Ayan and Alizeh happens and they hook up with each other. They get to know about each other and become friends. Later, when they discover their respective partners are cheating on them, they break up with their lovers: Ayan with Lisa D'Souza and Alizeh with Dr. Faisal Khan and the two go to Paris to spend a week together. Aayan falls in love with Alizeh but does not tell her while she considers him to be only a friend. One day, Alizeh stumbles upon DJ Ali, her ex-boyfriend/lover, who wants to reconcile. Partially confused, but still in love with him, Alizeh decides to go with DJ Ali, and so unintentionally stops hanging out with Ayan and they cease communication."
// }
