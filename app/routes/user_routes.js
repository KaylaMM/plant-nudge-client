module.exports = function (app, db) {
  app.post("/user", (req, res) => {
    const user = { username: req.body.username, password: req.body.password };
    db.collections("user").insert(user, (err, result) => {});
    if (err) {
      res.send({ error: "An error has occurd" });
    } else {
      res, send(result.ops[0]);
    }
  });
};
