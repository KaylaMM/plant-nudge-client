module.exports = function (app, db) {
  app.post("/user", (req, res) => {
    //  create the user here
    console.log(req.body);
    res.send("Hello");
  });
};
