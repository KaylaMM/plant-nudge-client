module.exports = function (app, db) {
  app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("Hello");
  });
};
