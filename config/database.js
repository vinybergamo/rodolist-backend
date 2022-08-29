const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vinybergamo:40028922@vinybergamo.ya0c858.mongodb.net/todolist?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado ao mongoDB"))
  .catch((err) => console.log(err));
