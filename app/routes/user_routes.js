const ObjectID = require("mongodb").ObjectID;

module.exports = function (app, db) {
  //READ
  app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("user").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurd" });
      } else {
        res.send(item);
      }
    });
  });

  //CREATE
  app.post("/user", (req, res) => {
    const user = { username: req.body.username, password: req.body.password };
    db.collection("user").insert(user, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurd" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
